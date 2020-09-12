const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
//.JSON file usage
var info = require('./Files/info.json');
const prefix = (info.prefix);
client.login('NzUzODEyNjExNjE0OTAwMzE0.X1rosw.touFs3ZnBZvkeOkTnrEkwNpGFGM');
		
//Bot Starts Here

client.on('ready', () => {
	console.log(`Slime ready!, currently running ${info.version} on ${info.phase}`);
	client.guilds.cache.get(info.mainGuildID).channels.cache.get(info.logChannelID).send(`I Am Online!, Running ${info.version} on ${info.phase}`)
	client.user.setActivity("Your Journey", {type: 'STREAMING'});
	});
client.on('reconnecting',() => {
	console.log(`Slime reconnecting!`);
	client.user.setPressence({ activity: { name: 'with the lag'}, status:'idle'});
	});
	
client.on('message', message => {
	if (message.content.startsWith(prefix)){
		messageGuildID = message.guild.id
		messageContent = message.content
		if (message.author.id === '582195861874802709'){
			switch(messageContent){
				case `${prefix}off`:
					console.log(`Process Exited with code 1`)
					message.channel.send(`Goodbye! :wave: Hope To See You Soon`).then(() => {
						process.exit(1)
						});
					break;
				case `${prefix}test`:
					console.log(`this is working`)
					message.channel.send(`Hello!`)
					break;
				};
			};
		};
	});
