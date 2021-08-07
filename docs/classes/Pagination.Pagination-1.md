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
- [channel](Pagination.Pagination-1.md#channel)
- [client](Pagination.Pagination-1.md#client)
- [options](Pagination.Pagination-1.md#options)
- [page](Pagination.Pagination-1.md#page)
- [pages](Pagination.Pagination-1.md#pages)

### Methods

- [send](Pagination.Pagination-1.md#send)
- [setAuthorizedUsers](Pagination.Pagination-1.md#setauthorizedusers)
- [setChannel](Pagination.Pagination-1.md#setchannel)
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

[Pagination.ts:70](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L70)

## Properties

### \_actionRow

• `Private` **\_actionRow**: `MessageActionRow`

The the action row which will contain the buttons

#### Defined in

[Pagination.ts:45](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L45)

___

### \_actionRowEnd

• `Private` **\_actionRowEnd**: `MessageActionRow`

The same _actionRow but with all buttons disabled

#### Defined in

[Pagination.ts:50](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L50)

___

### authorizedUsers

• **authorizedUsers**: `string`[]

Authorized Users

#### Defined in

[Pagination.ts:68](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L68)

___

### channel

• **channel**: `TextChannel` \| `DMChannel`

Text channel to send embed

#### Defined in

[Pagination.ts:62](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L62)

___

### client

• `Readonly` **client**: `Client`<`boolean`\>

The discord.js Client

#### Defined in

[Pagination.ts:15](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L15)

___

### options

• `Private` **options**: [`PaginationOptions`](../interfaces/types.PaginationOptions.md)

Pagination Options

#### Defined in

[Pagination.ts:22](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L22)

___

### page

• **page**: `number`

The page number

#### Defined in

[Pagination.ts:38](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L38)

___

### pages

• **pages**: `MessageEmbed`[]

Pages

#### Defined in

[Pagination.ts:56](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L56)

## Methods

### send

▸ **send**(): `boolean`

Send the embed

#### Returns

`boolean`

#### Defined in

[Pagination.ts:157](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L157)

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

[Pagination.ts:148](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L148)

___

### setChannel

▸ **setChannel**(`channel`): `boolean`

Set the channel where the embed should be sent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `TextChannel` \| `DMChannel` | A TextChannel |

#### Returns

`boolean`

#### Defined in

[Pagination.ts:137](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L137)

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

[Pagination.ts:127](https://github.com/Welcome-Bot/discord-pagination/blob/9fe738e/src/Pagination.ts#L127)
