import { MessageButtonStyleResolvable } from "discord.js";

/** Options for Pagination class **/
export interface PaginationOptions {
    /** Next Button options */
    nextBtn: {
        /** Label for the button, default: Next */
        label: string;
        /** One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: PRIMARY */
        style: MessageButtonStyleResolvable;
    };
    /** Back Button options */
    backBtn: {
        /** Label for the button, default: Back */
        label: string;
        /** One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: SECONDARY */
        style: MessageButtonStyleResolvable;
    };
    /** Time in milliseconds after which buttons are disabled, default: 30000 (30 seconds) */
    timeout: number;
}
