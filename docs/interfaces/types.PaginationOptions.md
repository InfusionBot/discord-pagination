[djs-pagination-buttons](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / PaginationOptions

# Interface: PaginationOptions

[types](../modules/types.md).PaginationOptions

Options for Pagination class

## Table of contents

### Properties

- [backBtn](types.PaginationOptions.md#backbtn)
- [nextBtn](types.PaginationOptions.md#nextbtn)
- [timeout](types.PaginationOptions.md#timeout)

## Properties

### backBtn

• **backBtn**: `Object`

Back Button options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | Label for the button, default: Back |
| `style` | `MessageButtonStyleResolvable` | One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: SECONDARY |

#### Defined in

[types.ts:13](https://github.com/Welcome-Bot/discord-pagination/blob/c848593/src/types.ts#L13)

___

### nextBtn

• **nextBtn**: `Object`

Next Button options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | Label for the button, default: Next |
| `style` | `MessageButtonStyleResolvable` | One of [MessageButtonStyleResolvable](https://discord.js.org/#/docs/main/master/typedef/MessageButtonStyleResolvable), default: PRIMARY |

#### Defined in

[types.ts:6](https://github.com/Welcome-Bot/discord-pagination/blob/c848593/src/types.ts#L6)

___

### timeout

• **timeout**: `number`

Time in milliseconds after which buttons are disabled, default: 30000 (30 seconds)

#### Defined in

[types.ts:20](https://github.com/Welcome-Bot/discord-pagination/blob/c848593/src/types.ts#L20)
