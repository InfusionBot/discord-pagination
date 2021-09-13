import { MessageButtonStyleResolvable } from "discord.js";

/** Options for Pagination class **/
export interface PaginationOptions {
    /** Options for other buttons */
    buttons: {
        /** Back Button options */
        back: {
            /** Label for the button, default: `Back` */
            label: string;
            /** One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: `SUCCESS` */
            style: MessageButtonStyleResolvable;
        };
        /** Next Button options */
        next: {
            /** Label for the button, default: `Next` */
            label: string;
            /** One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: `PRIMARY` */
            style: MessageButtonStyleResolvable;
        };
        /** A disabled button which shows current page, default: Page {{page}} / {{total_pages}} */
        page: string;
    };
    /** Time in milliseconds after which all buttons are disabled, default: `30000` (30 seconds) */
    timeout: number;
}
