import { Client } from "discord.js";
import { PaginationOptions } from "./types";

class Pagination {
    public readonly client: Client;
    public readonly options: PaginationOptions;

    constructor(client: Client, options: PaginationOptions = {}) {
        /**
         * The discord.js Client
         * @type {Client}
         */
        this.client = client;
    }
}

export { Pagination };
