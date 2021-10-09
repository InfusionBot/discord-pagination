/**
 * Main Pagination file
 *
 * @module Pagination
 */
import {
    Collection,
    Client,
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    TextChannel,
    CommandInteraction,
    Snowflake,
    ButtonInteraction,
    Interaction,
    Message,
} from "discord.js";
import { PaginationOptions } from "./types";

/** Pagination class */
class Pagination {
    /**
     * The discord.js Client
     * @type {Client}
     */
    public readonly client: Client;

    /**
     * Pagination Options
     * @type {PaginationOptions}
     * @private
     */
    private options: PaginationOptions = {
        buttons: {
            back: {
                label: "Back",
                style: "SUCCESS",
            },
            next: {
                label: "Next",
                style: "PRIMARY",
            },
            page: "Page {{page}} / {{total_pages}}",
        },
        timeout: 30000, //30 seconds
    };

    /**
     * Unique key for those buttons
     * @type {string}
     * @private
     */
    private _key: string;

    /**
     * The page number
     * @type {number}
     */
    public page: number;

    /**
     * The the action row which will contain the buttons
     * @type {MessageActionRow}
     * @private
     */
    private _actionRow: MessageActionRow;

    /**
     * The same _actionRow but with all buttons disabled
     */
    private _actionRowEnd: MessageActionRow;

    /**
     * Pages
     * @type {Array<MessageEmbed>}
     */
    public pages: Array<MessageEmbed>;

    /**
     * Authorized Users
     * @type {Array<Snowflake>}
     */
    public authorizedUsers: Array<Snowflake>;

    constructor(client: Client, options: PaginationOptions) {
        this.client = client;
        if (options && options.buttons)
            options.buttons = Object.assign(
                this.options.buttons,
                options.buttons
            );
        this.options = Object.assign(this.options, options);
        this.page = 0;
        this._key = this._generateString(5);
    }

    /**
     * Generate random string
     * https://stackoverflow.com/a/1349426
     * @private
     */
    private _generateString(length: number) {
        let result = "";
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }

    /**
     * Get page label
     * @private
     */
    private _getPageLabel() {
        const label = this.options.buttons.page
            .replace("{{page}}", `${this.page + 1}`)
            .replace("{{total_pages}}", `${this.pages.length}`);
        return label;
    }

    /**
     * Set Array of pages to paginate
     * @param array - Those pages
     * @return {boolen}
     */
    public setPages(array: Array<MessageEmbed>) {
        this.pages = array;
        return true;
    }

    /**
     * Set an array of user IDs who can switch pages
     * @param users - A array of user IDs
     * @return {boolen}
     */
    public setAuthorizedUsers(users: Array<Snowflake>) {
        this.authorizedUsers = users;
        return true;
    }

    /**
     * Send the embed
     * @param channel - If you want to send it to a channel instead of repling to interaction, give the channel here
     * @param interaction - If you are not providing channel, set channel to false and provide a command interaction here
     * @return {boolen}
     */
    public async send(channel: TextChannel, i: CommandInteraction) {
        if (!this.pages) throw new Error("Pages not set");
        if (!this.authorizedUsers) throw new Error("Authorized Users not set");
        if (!channel && !(i && i?.isCommand?.())) {
            throw new Error(
                "You should either provide channel or command interaction, set channel to false if you are providing interaction"
            );
        }
        if (i && !i.deferred && !i.replied) await i.deferReply();
        const { buttons } = this.options;
        this._actionRow = new MessageActionRow();
        const backButton = new MessageButton()
            .setLabel(`${buttons.back.label}`)
            .setStyle(buttons.back.style)
            .setCustomId(`back-${this._key}`);
        if (buttons.back.emoji !== "") backButton.setEmoji(buttons.back.emoji);
        const pageButton = new MessageButton()
            .setLabel(this._getPageLabel())
            .setStyle("SECONDARY")
            .setCustomId(`page-${this._key}`)
            .setDisabled(true);
        const nextButton = new MessageButton()
            .setLabel(`${buttons.next.label}`)
            .setStyle(buttons.next.style)
            .setCustomId(`next-${this._key}`);
        if (buttons.next.emoji) nextButton.setEmoji(buttons.next.emoji);
        this._actionRow.addComponents(backButton, pageButton, nextButton);
        let msg;
        if (channel) {
            msg = await channel.send({
                embeds: [this.pages[this.page]],
                components: [this._actionRow],
            });
        } else if (i) {
            msg = await i.followUp({
                embeds: [this.pages[this.page]],
                components: [this._actionRow],
            });
        } else {
            return false;
        }
        msg = msg as Message;
        const ids = [`next-${this._key}`, `back-${this._key}`];
        const filter = ((i: any) =>
            ids.includes(i.customId) &&
            this.authorizedUsers.includes(i.user.id)).bind(this);
        const collector = msg.createMessageComponentCollector({
            filter,
            componentType: "BUTTON",
            time: this.options.timeout,
        });
        collector.on("collect", (interaction: ButtonInteraction) => {
            const handlePage = (() => {
                if (this._actionRow.components[1] instanceof MessageButton)
                    this._actionRow.components[1].setLabel(
                        this._getPageLabel()
                    );
            }).bind(this); //Update page label
            switch (interaction.customId) {
                case `next-${this._key}`:
                    this.page =
                        this.page + 1 < this.pages.length ? ++this.page : 0;
                    handlePage();
                    interaction
                        .update({
                            embeds: [this.pages[this.page]],
                            components: [this._actionRow],
                        })
                        .catch(() => true);
                    break;
                case `back-${this._key}`:
                    this.page =
                        this.page > 0 ? --this.page : this.pages.length - 1;
                    handlePage();
                    interaction
                        .update({
                            embeds: [this.pages[this.page]],
                            components: [this._actionRow],
                        })
                        .catch(() => true);
                    break;
            }
        });
        collector.on(
            "end",
            async (collected: Collection<Snowflake, Interaction>) => {
                const interaction = collected.last() as ButtonInteraction;
                for (let i = 0; i < this._actionRow.components.length; i++) {
                    this._actionRow.components[i].setDisabled(true);
                }
                await interaction
                    .update({
                        embeds: [this.pages[this.page]],
                        components: [this._actionRow],
                    })
                    .catch(() => true);
            }
        );
        return true;
    }
}

export { Pagination };
