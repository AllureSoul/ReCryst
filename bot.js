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
			})}
		else if (message.content.startsWith('.af')){
		const [command, user1, numMax] = message.content.split(" ");
		if (!user1){
		message.reply('Please Mention a user');
		return;
		}
		const user = client.users.cache.get(user1);
		var num = 0
		while(num != numMax){
			user.send('test')
			num = num++
		}
		}
				}
			}
		);
