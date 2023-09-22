module.exports = {
    name: "ready",
    /**
     * 
     * @param {import("../../structures/lib/DiscordClient")} client 
     */
    run: (client) => {
        console.log(`Logged in as ${client.user.tag}!`);
        const commandsArray=[];
        client.slashCommands.forEach(cmd => {
            if (cmd.permission) {
                if (cmd.permission.member) {
                    cmd.defaultMemberPermissions=cmd.permission.member;
                }
            }
            commandsArray.push(cmd);
        });
        client.application.commands.set(commandsArray);
        client.user.setPresence(client.config.presence);
    }
}