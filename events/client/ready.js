module.exports = {
    name: "ready",
    /**
     * 
     * @param {import("../../structures/lib/DiscordClient")} client 
     */
    run: (client) => {
        console.log(`Logged in as ${client.user.tag}!`);
        client.guilds.cache.forEach(guild => {
            guild.commands.set(commands);
        });
    }
}