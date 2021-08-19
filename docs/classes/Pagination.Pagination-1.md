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
- [\_key](Pagination.Pagination-1.md#_key)
- [authorizedUsers](Pagination.Pagination-1.md#authorizedusers)
- [client](Pagination.Pagination-1.md#client)
- [options](Pagination.Pagination-1.md#options)
- [page](Pagination.Pagination-1.md#page)
- [pages](Pagination.Pagination-1.md#pages)

### Methods

- [\_generateString](Pagination.Pagination-1.md#_generatestring)
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

[Pagination.ts:74](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L74)

## Properties

### \_actionRow

• `Private` **\_actionRow**: `MessageActionRow`

The the action row which will contain the buttons

#### Defined in

[Pagination.ts:55](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L55)

___

### \_actionRowEnd

• `Private` **\_actionRowEnd**: `MessageActionRow`

The same _actionRow but with all buttons disabled

#### Defined in

[Pagination.ts:60](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L60)

___

### \_key

• `Private` **\_key**: `string`

Unique key for those buttons

#### Defined in

[Pagination.ts:42](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L42)

___

### authorizedUsers

• **authorizedUsers**: `string`[]

Authorized Users

#### Defined in

[Pagination.ts:72](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L72)

___

### client

• `Readonly` **client**: `Client`<`boolean`\>

The discord.js Client

#### Defined in

[Pagination.ts:15](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L15)

___

### options

• `Private` **options**: [`PaginationOptions`](../interfaces/types.PaginationOptions.md)

Pagination Options

#### Defined in

[Pagination.ts:22](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L22)

___

### page

• **page**: `number`

The page number

#### Defined in

[Pagination.ts:48](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L48)

___

### pages

• **pages**: `MessageEmbed`[]

Pages

#### Defined in

[Pagination.ts:66](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L66)

## Methods

### \_generateString

▸ `Private` **_generateString**(`length`): `string`

Generate random string
https://stackoverflow.com/a/1349426

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`string`

#### Defined in

[Pagination.ts:125](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L125)

___

### \_getPageLabel

▸ `Private` **_getPageLabel**(): `string`

Get page label

#### Returns

`string`

#### Defined in

[Pagination.ts:140](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L140)

___

### send

▸ **send**(`channel`, `interaction`): `Promise`<`boolean`\>

Send the embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `TextChannel` | If you want to send it to a channel instead of repling to interaction, give the channel here |
| `interaction` | `CommandInteraction` | If you are not providing channel, set channel to false and provide a command interaction here |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Pagination.ts:173](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L173)

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

[Pagination.ts:162](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L162)

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

[Pagination.ts:152](https://github.com/Welcome-Bot/discord-pagination/blob/a5c9973/src/Pagination.ts#L152)
