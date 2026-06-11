client.once("ready", () => {
    console.log(`${client.user.tag} online`);

    client.user.setPresence({
        activities: [{
            name: process.env.STATUS || ".help | Venus Ultra",
            type: 3
        }],
        status: "online"
    });
});
