const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();

//.JSON file usage
var info = require('./Files/info.json');
const prefix = (info.prefix);
client.login(process.env.BOT_TOKEN);
		
//Bot Starts Here

client.on('ready', () => {
	console.log(`Slime ready!, currently running ${info.version} on ${info.phase}`);
	client.guilds.cache.get(info.mainGuildID).channels.cache.get(info.logChannelID).send(`I Am Online!, Running ${info.version} on ${info.phase}`)
	client.user.setActivity("Your Journey", {type: 'PLAYING' });
});
	