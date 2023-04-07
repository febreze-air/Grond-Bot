require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    });

client.on('ready', (c) => {
    //Sends a message to the console when the bot is online
    console.log(`✅ ${c.user.username} is online.`)
});

client.on('messageCreate', (message) => {

    //Causes the bot to ignore messages sent from itself or other bots
    if(message.author.bot){
        return;
    }

    //Sends a reply if the user uses the word grond in their message
    if(message.content.toLocaleLowerCase().includes('grond')){
        message.reply('GROND! GROND! GROND!');
    }

    //Sends a reply if the user uses the word napat in their message
    if(message.content.toLocaleLowerCase().includes('nampat')){
        message.reply('NAMPAT! NAMPAT! NAMPAT!');
    }
});

client.login(process.env.TOKEN); //Token is normally stored here but it is stored in the env file.