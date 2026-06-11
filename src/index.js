require("dotenv").config();

const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`${client.user.tag} online`);

    client.user.setPresence({
        activities: [{
            name: process.env.STATUS || ".help | Venus Ultra",
            type: ActivityType.Listening
        }],
        status: "online"
    });
});

client.login(process.env.TOKEN);
