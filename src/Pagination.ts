import { Client, MessageEmbed, MessageActionRow, MessageButton, TextChannel, DMChannel } from "discord.js";
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

    /**
     * The page number
     * @type {number}
     * @private
     */
    private page: number;

    /**
     * The the action row which will contain the buttons
     * @type {MessageActionRow}
     * @private
     */
    private _actionRow: MessageActionRow;

    /**
     * Pages
     * @type {Array<MessageEmbed>}
     * @private
     */
    private pages: Array<MessageEmbed>;

    /**
     * Text channel to send embed
     * @type {TextChannel}
     * @private
     */
    private channel: TextChannel;

    constructor(client: Client, options: PaginationOptions) {
        this.client = client;
        this.options = Object.assign(this.options, options);
        this.page = 0;
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
                    this.page = this.page > 0 ? --this.page : this.pages.length - 1;
                    interaction.update({
                        embeds: [this.pages[this.page]],
                        components: this._actionRow,
                    });
                    break;
            }
        });
    }

    /**
     * Set Array of pages to paginate
     * @param array - Those pages
     * @return boolen
     */
    public setPages(array: Array<MessageEmbed>) {
        this.pages = array;
        return true;
    }

    /**
     * Set channel where the embed dhould be sent
     * @param channel - A TextChannel
     * @return boolen
     */
    public setChannel(channel: TextChannel | DMChannel) {
        if (!channel instanceof TextChannel) throw new TypeError("Pagination.setChannel() requires channel to be an instance of MessageEmbed");
        this.channel = channel;
        return true;
    }

    /**
     * Send the embed
     * @return boolen
     */
    public send() {
        if (!this.channel) throw new Error("Channel not set");
        if (!this.pages) throw new Error("Pages not set");
        this.channel.send({ embeds: [this.pages[this.page]] }).then((msg => {return msg;})).catch(console.error);
        return true;
    }
}

export { Pagination };
