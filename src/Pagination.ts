/**
 * Main Pagination file
 * 
 * @module Pagination
 */
import { Client, MessageEmbed, MessageActionRow, MessageButton, Message, CommandInteraction, Snowflake } from "discord.js";
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
            backBtn: {
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
        this.options = Object.assign(this.options, options);
        this.page = 0;
        this._actionRow = new MessageActionRow();
        const backButton = new MessageButton()
            .setLabel(this.options.backBtn.label)
            .setStyle(this.options.backBtn.style)
            .setCustomId("backBtn");
        const pageButton = new MessageButton()
            .setLabel(this._getPageLabel())
            .setStyle("SECONDARY")
            .setCustomId("pageBtn");
        const nextButton = new MessageButton()
            .setLabel(this.options.buttons.next.label)
            .setStyle(this.options.buttons.next.style)
            .setCustomId("nextBtn")
            .setDisabled(true);
        this._actionRow.addComponents(
            backButton,
            pageButton,
            nextButton,
        );
        this.client.on("interactionCreate", (interaction: any) => {
            if (!interaction.isButton()) return;
            const ids = ["nextBtn", "backBtn"];
            const filter = (i: any) => (ids.includes(i.customId) && this.authorizedUsers.includes(i.user.id));
            if (!(filter(interaction))) return;
            let handlePage = () => this._actionRow.components[1].setLabel(this._getPageLabel()); //Update page label
            handlePage = handlePage.bind(this);
            switch (interaction.customId) {
                case "nextBtn":
                    this.page = this.page + 1 < this.pages.length ? ++this.page : 0;
                    handlePage();
                    interaction.update({
                        embeds: [this.pages[this.page]],
                        components: [this._actionRow],
                    });
                    break;
                case "backBtn":
                    this.page = this.page > 0 ? --this.page : this.pages.length - 1;
                    handlePage();
                    interaction.update({
                        embeds: [this.pages[this.page]],
                        components: [this._actionRow],
                    });
                    break;
            }
            setTimeout(async () => {
                for (const i = 0; i < this._actionRow.components.length; i++) {
                    this._actionRow.components[i].setDisabled(true);
                }
                handlePage();
                await interaction.update({
                    embeds: [this.pages[this.page]],
                    components: [this._actionRow],
                });
            }, this.options.timeout);
        });
    }

    /**
     * Get page label
     * @private
     */
    private _getPageLabel() {
        return this.options.nextBtn.label
            .replace("{{page}}", `${this.page}`)
            .replace("{{total_pages}}", `${this.pages.length}`);
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
     * @return {boolen}
     */
    public send(messageOrInteraction: Message | CommandInteraction) {
        if (!this.pages) throw new Error("Pages not set");
        if (!this.authorizedUsers) throw new Error("Authorized Users not set");
        messageOrInteraction.reply({
            embeds: [this.pages[this.page]],
            components: [this._actionRow],
        })
            .then((msg: any) => {return msg;})
            .catch(console.error);
        return true;
    }
}

export { Pagination };
