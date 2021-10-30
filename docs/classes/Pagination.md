[djs-pagination-buttons](../README.md) / [Exports](../modules.md) / Pagination

# Class: Pagination

Pagination class

## Table of contents

### Constructors

- [constructor](Pagination.md#constructor)

### Properties

- [\_actionRow](Pagination.md#_actionrow)
- [\_actionRowEnd](Pagination.md#_actionrowend)
- [\_key](Pagination.md#_key)
- [authorizedUsers](Pagination.md#authorizedusers)
- [client](Pagination.md#client)
- [options](Pagination.md#options)
- [page](Pagination.md#page)
- [pages](Pagination.md#pages)

### Methods

- [\_generateString](Pagination.md#_generatestring)
- [\_getPageLabel](Pagination.md#_getpagelabel)
- [send](Pagination.md#send)
- [setAuthorizedUsers](Pagination.md#setauthorizedusers)
- [setPages](Pagination.md#setpages)

## Constructors

### constructor

• **new Pagination**(`client`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `Client`<`boolean`\> |
| `options` | [`PaginationOptions`](../interfaces/PaginationOptions.md) |

#### Defined in

[Pagination.ts:86](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L86)

## Properties

### \_actionRow

• `Private` **\_actionRow**: `MessageActionRow`

The the action row which will contain the buttons

#### Defined in

[Pagination.ts:67](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L67)

___

### \_actionRowEnd

• `Private` **\_actionRowEnd**: `MessageActionRow`

The same _actionRow but with all buttons disabled

#### Defined in

[Pagination.ts:72](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L72)

___

### \_key

• `Private` **\_key**: `string`

Unique key for those buttons

#### Defined in

[Pagination.ts:54](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L54)

___

### authorizedUsers

• **authorizedUsers**: `string`[]

Authorized Users

#### Defined in

[Pagination.ts:84](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L84)

___

### client

• `Readonly` **client**: `Client`<`boolean`\>

The discord.js Client

#### Defined in

[Pagination.ts:27](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L27)

___

### options

• `Private` **options**: [`PaginationOptions`](../interfaces/PaginationOptions.md)

Pagination Options

#### Defined in

[Pagination.ts:34](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L34)

___

### page

• **page**: `number`

The page number

#### Defined in

[Pagination.ts:60](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L60)

___

### pages

• **pages**: `MessageEmbed`[]

Pages

#### Defined in

[Pagination.ts:78](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L78)

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

[Pagination.ts:103](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L103)

___

### \_getPageLabel

▸ `Private` **_getPageLabel**(): `string`

Get page label

#### Returns

`string`

#### Defined in

[Pagination.ts:120](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L120)

___

### send

▸ **send**(`channel`, `i`): `Promise`<`boolean`\>

Send the embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `TextChannel` | If you want to send it to a channel instead of repling to interaction, give the channel here |
| `i` | `CommandInteraction`<`CacheType`\> | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Pagination.ts:153](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L153)

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

[Pagination.ts:142](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L142)

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

[Pagination.ts:132](https://github.com/Welcome-Bot/discord-pagination/blob/49a9907/src/Pagination.ts#L132)
