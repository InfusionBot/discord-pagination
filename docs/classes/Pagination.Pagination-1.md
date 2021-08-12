[djs-pagination-buttons](../README.md) / [Exports](../modules.md) / [Pagination](../modules/Pagination.md) / Pagination

# Class: Pagination

[Pagination](../modules/Pagination.md).Pagination

Pagination class

## Table of contents

### Constructors

- [constructor](Pagination.Pagination-1.md#constructor)

### Properties

- [\_actionRow](Pagination.Pagination-1.md#_actionrow)
- [\_actionRowEnd](Pagination.Pagination-1.md#_actionrowend)
- [authorizedUsers](Pagination.Pagination-1.md#authorizedusers)
- [client](Pagination.Pagination-1.md#client)
- [options](Pagination.Pagination-1.md#options)
- [page](Pagination.Pagination-1.md#page)
- [pages](Pagination.Pagination-1.md#pages)

### Methods

- [\_getPageLabel](Pagination.Pagination-1.md#_getpagelabel)
- [send](Pagination.Pagination-1.md#send)
- [setAuthorizedUsers](Pagination.Pagination-1.md#setauthorizedusers)
- [setPages](Pagination.Pagination-1.md#setpages)

## Constructors

### constructor

• **new Pagination**(`client`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `Client`<`boolean`\> |
| `options` | [`PaginationOptions`](../interfaces/types.PaginationOptions.md) |

#### Defined in

[Pagination.ts:67](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L67)

## Properties

### \_actionRow

• `Private` **\_actionRow**: `MessageActionRow`

The the action row which will contain the buttons

#### Defined in

[Pagination.ts:48](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L48)

___

### \_actionRowEnd

• `Private` **\_actionRowEnd**: `MessageActionRow`

The same _actionRow but with all buttons disabled

#### Defined in

[Pagination.ts:53](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L53)

___

### authorizedUsers

• **authorizedUsers**: `string`[]

Authorized Users

#### Defined in

[Pagination.ts:65](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L65)

___

### client

• `Readonly` **client**: `Client`<`boolean`\>

The discord.js Client

#### Defined in

[Pagination.ts:15](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L15)

___

### options

• `Private` **options**: [`PaginationOptions`](../interfaces/types.PaginationOptions.md)

Pagination Options

#### Defined in

[Pagination.ts:22](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L22)

___

### page

• **page**: `number`

The page number

#### Defined in

[Pagination.ts:41](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L41)

___

### pages

• **pages**: `MessageEmbed`[]

Pages

#### Defined in

[Pagination.ts:59](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L59)

## Methods

### \_getPageLabel

▸ `Private` **_getPageLabel**(): `string`

Get page label

#### Returns

`string`

#### Defined in

[Pagination.ts:116](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L116)

___

### send

▸ **send**(`messageOrInteraction`): `boolean`

Send the embed

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageOrInteraction` | `Message` \| `CommandInteraction` |

#### Returns

`boolean`

#### Defined in

[Pagination.ts:147](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L147)

___

### setAuthorizedUsers

▸ **setAuthorizedUsers**(`users`): `boolean`

Set an array of user IDs who can switch pages

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `users` | `string`[] | A array of user IDs |

#### Returns

`boolean`

#### Defined in

[Pagination.ts:138](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L138)

___

### setPages

▸ **setPages**(`array`): `boolean`

Set Array of pages to paginate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `MessageEmbed`[] | Those pages |

#### Returns

`boolean`

#### Defined in

[Pagination.ts:128](https://github.com/Welcome-Bot/discord-pagination/blob/4292065/src/Pagination.ts#L128)
