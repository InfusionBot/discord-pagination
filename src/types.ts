import { MessageButtonStyleResolvable } from "discord.js";

export interface PaginationOptions {
    nextBtn: {
        label: string;
        style: MessageButtonStyleResolvable;
    };
    backBtn: {
        label: string;
        style: MessageButtonStyleResolvable;
    };
    timeout: number;
}
