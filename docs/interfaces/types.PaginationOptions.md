[djs-pagination-buttons](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / PaginationOptions

# Interface: PaginationOptions

[types](../modules/types.md).PaginationOptions

Options for Pagination class

## Table of contents

### Properties

- [buttons](types.PaginationOptions.md#buttons)
- [timeout](types.PaginationOptions.md#timeout)

## Properties

### buttons

• **buttons**: `Object`

Options for other buttons

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `back` | `Object` | Back Button options |
| `back.label` | `string` | Label for the button, default: `Back` |
| `back.style` | `MessageButtonStyleResolvable` | One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: `SUCCESS` |
| `next` | `Object` | Next Button options |
| `next.label` | `string` | Label for the button, default: `Next` |
| `next.style` | `MessageButtonStyleResolvable` | One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: `PRIMARY` |
| `page` | `string` | A disabled button which shows current page, default: `Page {{page}} / {{total_pages}}` |

#### Defined in

[types.ts:6](https://github.com/Welcome-Bot/discord-pagination/blob/ac3249a/src/types.ts#L6)

___

### timeout

• **timeout**: `number`

Time in milliseconds after which all buttons are disabled, default: `30000` (30 seconds)

#### Defined in

[types.ts:25](https://github.com/Welcome-Bot/discord-pagination/blob/ac3249a/src/types.ts#L25)
