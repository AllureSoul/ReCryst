const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const prefix = "."
client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
	console.log(`ReCryst ready!`);
	client.user.setActivity("Ceacillia's Play", {type: 'WATCHING' });
});
//Ceacillia Only
client.on('message', message => {
	if (message.author.id === '582195861874802709'){
		if (message.content === '.off'){
			message.delete()
			message.channel.send(`Goodbye! :wave: Hope To See You Soon`).then(() => {
			process.exit(1)
			})
		if (message.content.startsWith('.af')){
		const [command, user, numMax] = message.content.split(" ");
		if (!user){
		message.reply('Please Mention a user');
		return;
		}
		while(num != numMax){
			var num = 0
			user.send(test)
			num++
		}
		}
				}
			}
		});
