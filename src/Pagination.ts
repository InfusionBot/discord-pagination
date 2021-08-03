import { Client, MessageEmbed, MessageActionRow, MessageButton, TextChannel } from "discord.js";
import { PaginationOptions } from "./types";

/** Pagination class */
class Pagination {
    public readonly client: Client;
    private options: PaginationOptions = {
        nextBtn: {
            label: "Next",
            style: "PRIMARY",
        },
        backBtn: {
            label: "Back",
            style: "SECONDARY",
        },
        timeout: 3000,
    };
    private page: number = 0;
    private _actionRow: MessageActionRow;
    private pages: Array<MessageEmbed>;
    private channel: TextChannel;

    constructor(client: Client, options: PaginationOptions = {}) {
        /**
         * The discord.js Client
         * @type {Client}
         */
        this.client = client;
        /**
         * Pagination Options
         * @type {PaginationOptions}
         */
        this.options = Object.assign(this.options, options);
        this.client.on("interactionCreate", (interaction: any) => {
            if (!interaction.isButton()) return;
            const ids = ["nextBtn", "backBtn"];
            if (!ids.includes(interaction.customId)) return;
            interaction.defer();
            switch(interaction.customId) {
                case "nextBtn":
                    this.page = this.page + 1 < this.pages.length ? ++this.page : 0;
                    interaction.update({
                        embeds: [this.pages[this.page]],
                        components: this._actionRow,
                    });
                    break;
                case "backBtn":
                    this.page = this.page > 0 ? --page : this.pages.length - 1;
                    interaction.update({
                        embeds: [this.pages[this.page]],
                        components: this._actionRow,
                    });
                    break;
            }
        });
    }

    /**
     * Build the Embed
     * @param embedOptions - The MessageEmbedOptions provided by discord.js
     */
    public build() {
        /**
         * The the action row which will contain the buttons
         * @type {MessageActionRow}
         * @private
         */
        this._actionRow = new MessageActionRow();
        const nextButton = new MessageButton()
            .setLabel(this.options.nextBtn.label)
            .setStyle(this.options.nextBtn.style)
            .setCustomId("nextBtn");
        const backButton = new MessageButton()
            .setLabel(this.options.backBtn.label)
            .setStyle(this.options.backBtn.style)
            .setCustomId("backBtn");
        this._actionRow.addComponents(
            nextButton,
            backButton,
        );
    }

    /**
     * Set Array of pages to paginate
     * @param array - Those pages
     */
    public setPages(array: Array<MessageEmbed>) {
        this.pages = array;
    }

    /**
     * Sets the time for awaiting a user action before timeout in ms.
     * @param timeout - Timeout value in ms.
     */
    public setTimeout(timeout: number) {
        if (typeof timeout !== "number") throw new TypeError("Pagination.setTimeout() requires timeout to be number type, received " + typeof timeout);
        this.options.timeout = timeout;
    }

    /**
     * Set channel where the embed dhould be sent
     * @param channel - A TextChannel
     */
    public setChannel(channel: TextChannel) {
        if (!channel instanceof TextChannel) throw new TypeError("Pagination.setChannel() requires channel to be an instance of MessageEmbed");
        this.channel = channel;
        return true;
    }

    /**
     * Send the embed
     */
    public send() {
        if (!this.channel) throw new Error("Channel not set");
        if (!this.pages) throw new Error("Pages not set");
        this.channel.send({ embeds: [this.pages[this.page]] }).then((msg => {return msg;})).catch(console.error);
    }
}

export { Pagination };
