# Changelog v0

The Changelog of the major version 0 of Discord Pagination buttons.

The displayed date is in the format `DD-MM-YYYY`

[Older changelogs](#older-changelogs)

## [v0.2.2]

> **Released:** `TBA`

### Bug fixes

- fix(Pagination): suppress "unknow interaction" error. Originally took from [Siris01@002a959](https://github.com/Siris01/discord-pagination/commit/002a959b95ef1b83b94cd2825830e3d47310afc0)

## [v0.2.1]

> **Released:** `19-08-2021`

### Bug fixes

- fix(Pagination): fix bug related to interactions. Only defer reply if not replied or deferred already
- fix(Pagination): like when you provide button options, if you didn't provide either `back` or `next` or `page`. Then it would throw an error `Cannot read property 'label' of undefined`

## [v0.2.0]

> **Released:** `19-08-2021`

### New features

- feat(Pagination): add a disabled button which shows current page
- refactor(Pagination): rename `options.nextBtn` -> `options.buttons.next`
- refactor(Pagination): rename `options.backBtn` -> `options.buttons.back`
- To send a command interaction, now you have to `send(null, interaction)` instead of `send(interaction)`
- To send reply to normal commands, now you have to use `send(message.channel)`

### Changes

- docs: add changelog

## [v0.1.4]

> **Released:** `10-08-2021`

### Changes

- fix(Pagination): fix buttons aren't disabled after timeout
- refactor: Change default style for back button to SUCCESS

## [v0.1.3]

> **Released:** `08-08-2021`

### Changes

- feat: add docs
- feat: add example
- refactor: drop setChannel function - Now ypu have to provide an interaction or message provided by djs in send function as argument 1.

## [v0.1.2]

> **Released:** `06-08-2021`

### Bug fixes

- fix(Pagination): `Error [INTERACTION_NOT_REPLIED]: The reply to this interaction has not been sent or deferred.`

## [v0.1.1]

> **Released:** `05-08-2021`

### Initial release

[v0.2.2]: https://github.com/Welcome-Bot/welcome-bot/releases/tag/v0.2.2
[v0.2.1]: https://github.com/Welcome-Bot/welcome-bot/releases/tag/v0.2.1
[v0.2.0]: https://github.com/Welcome-Bot/welcome-bot/releases/tag/v0.2.0
[v0.1.4]: https://github.com/Welcome-Bot/welcome-bot/releases/tag/v0.1.4
[v0.1.3]: https://github.com/Welcome-Bot/welcome-bot/releases/tag/v0.1.3
[v0.1.2]: https://github.com/Welcome-Bot/welcome-bot/releases/tag/v0.1.2
[v0.1.1]: https://github.com/Welcome-Bot/welcome-bot/releases/tag/v0.1.1

## Older changelogs

- No older changelogs
