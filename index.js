//Discord.js Bot that forwards its DM's to a specified channel
// Language: javascript


const Discord = require('discord.js');
const client = new Discord.Client({intents: [
    /*
        Intents 'GUILDS' is required
        if you wish to receive (message) events
        from guilds as well.

        If you don't want that, do not add it.
        Your bot will only receive events
        from Direct Messages only.
    */
    'GUILDS',
    'DIRECT_MESSAGES',
    'GUILD_MESSAGES'
], partials: ['MESSAGE', 'CHANNEL'] });
const config = require('./config.json');


client.on('ready', () => {
    console.log(`Bot is ready!`);
    client.user.setActivity(`with your Vents` );
    });


client.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.guildId === null) {
        client.channels.resolve(config.channel).send({embeds: [{
            title: "Vent",
            description: message.content,
            footer: {
                text: `Jede Nachricht die inakzeptabel ist wird gelöscht!`
            },
            color: "RANDOM"
            }]});
    }
})

client.login(config.token);