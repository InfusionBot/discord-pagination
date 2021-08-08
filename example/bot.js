const { Client, MessageEmbed } = require("discord.js");
const { Pagination } = require("djs-pagination-buttons");
const client = new Client({
    intents: ["GUILD_MESSAGES", "GUILDS"],
});
client.on("ready", async () => {
    console.log("Bot is online!");
    await client.application.commands.set([
        {
            name: "help",
            description: "Shows all commands!"
        }
    ]);
});
client.on("error", console.error);
client.on("warn", console.warn);
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "help") {
        const pages = [
            (new MessageEmbed).setTitle("Page 1"),
            (new MessageEmbed).setTitle("Page 2"),
        ];
        pages[0].setDescription("To see my commands, go to the next page using buttons.");
        pages[1].setDescription("My General commands\n```\n• help - Shows all commands!\n• kick - Kick someone\n• ban - Ban someone\n• unban - Unban someone\n```");
        const pagination = new Pagination(client);
        pagination.setPages(pages);
        pagination.setChannel(interaction.channel);
        pagination.setAuthorizedUsers([interaction.user.id]);
        pagination.send();
    }
});
client.login("TOKEN");
