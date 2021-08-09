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
        },
        {
            name: "ping",
            description: "Shows my ping!"
        },
        {
            name: "server",
            description: "Show server's name"
        }
    ]);
});
client.on("error", console.error);
client.on("warn", console.warn);
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
    const { commandName: cmd } = interaction;

    if (cmd === "help") {
        const pages = [
            (new MessageEmbed).setTitle("Page 1"),
            (new MessageEmbed).setTitle("Page 2"),
        ];
        pages[0].setDescription("To see my commands, go to the next page using buttons.");
        pages[1].setDescription("My General commands\n```\n• help - Shows all commands!\n• ping - Shows my ping!\n• server - Show server's name\n```");
        const pagination = new Pagination(client);
        pagination.setPages(pages);
        pagination.setAuthorizedUsers([interaction.user.id]);
        pagination.send(interaction);
    } else if (cmd === "ping") {
        await interaction.reply(`Pong!\nMy latency: ${client.ws.ping}ms`);
    } else if (cmd === "server") {
        await interaction.reply(`This server's name is ${interaction.guild.name}`);
    }
});
client.login(process.env.DISCORD_TOKEN);
