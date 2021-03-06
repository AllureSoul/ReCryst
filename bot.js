const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const prefix = "."
client.login(process.env.BOT_TOKEN);
		
//Bot Starts Here

client.on('ready', () => {
	console.log(`ReCryst ready!`);
	client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').send('I Am Online!')
	client.user.setActivity("Ceacillia's Play", {type: 'WATCHING' });
});
//Ceacillia Only
client.on('message', message => {
	if (message.author.id === '582195861874802709'){
		if (message.content === '.off'){
			message.delete()
			client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').send(`Goodbye! :wave:`)
			message.channel.send(`Goodbye! :wave: Hope To See You Soon`).then(() => {
			process.exit(1)
			})
		}
		else if(message.content.startsWith('.setActivity')){
			const [command ,type, ...activity] = message.content.split(" ");
			if (!type){
				message.reply(`${message.author} Please add an input.`);
				return;	
			};
			if (!activity){
				message.reply(`${message.author} Please add an input.`);
				return;	
			};
			client.user.setActivity(activity.join(" "), {type: type});
			console.log(`${message.author.username}, Activity Changed to ${activity.join(" ")}`)
		}
	}
});
//Admin Only
client.on('message', message => {
	if (message.author.id === '582195861874802709' || message.author.id === '574547932758540288' || message.author.id === '684702198327934983') {
	if (message.content.startsWith('.edit')){
		message.delete()
		const [command ,messageId, ...args] = message.content.split(" ");
		if (!messageId) return;
		message.channel.messages.fetch({around: messageId, limit: 1})
				  .then(messages => {
				messages.first().edit(args.join(" "));
console.log(`${message.author} has edited the message with id: ${messageId}`)
	})} else
		if (message.content.startsWith('.delete')){
		message.delete()
		const [command ,messageId] = message.content.split(" ");
		if (!messageId) return;
		message.channel.messages.fetch({around: messageId, limit: 1})
				  .then(messages => {
				messages.first().delete;
				})} else
	if (message.content.startsWith('.post')){
		message.delete()
		const [command , channelId, ...args] = message.content.split(" ");
		if (!channelId) return;
		if (channelId.startsWith('<#') && channelId.endsWith('>')) {
			channel = channelId.slice(2, -1);}
		console.log(`${message.author} has posted ${args.join(" ")} on the channel with the ID ${channelId}`);
switch(command){
				case command:
				client.guilds.cache.get('609376315648245810').channels.cache.get(channel).send(args.join(" "));
				client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').send(`${message.author} Used A Post Command`)
			break;
   	}}else
	if (message.content === '.clear'){
		message.channel.bulkDelete('100')
		client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').send(`${message.author} Used A Clear Command`)
		message.channel.send(`The Previous 100 Messages Have Been Deleted by ${message.author}`);
	}else
	if (message.content === '.intro'){
		message.delete()
		const embed = new Discord.MessageEmbed()
			.setTitle('Introduction')
			.setColor(0x3083f0)
			.setDescription('Hello Everybody :wave: , My Name Is ReCryst, I am a bot created by AllureSoul to help organize the ReCryst Server.')
			.addFields(
				{name : 'Prefix', value: "First Things First, My Prefix Is '.', so if you wanna call me, just do ., okay?"},
				{name : 'My Features',value :"1. I can Notify Others when you are playing \n 2. I can clear messages \n 3. i can send announcements. \n 4. I can Introduce myself \n isn't that great?"},
				{name :'Commands',value: "1. Poll. I can start a poll. Format: \n Poll To (Text), (Started By @User) \n 2. playing and isplaying. Playing tells others that you are playing, while if you want to notify others that someone else is playing, do isplaying and tag the people who are playing. \n thats all for now, i hope to see you soon. :wave:"},
			)
			message.channel.send(embed)
		client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').send(`${message.author} Used An Introduction Command`)
} else if (message.content === '.clearlogs'){
		client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').bulkDelete('100')
		message.reply('Logs Cleared!');
		client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').send(`${message.author} Cleared Logs`)
	}
	}
	});

//Unrestricted

client.on('message', message => {
		  if (message.content === '.playing'){
			message.delete()
			message.channel.send("<@&665427708464857101> We're Playing!")
	 		client.guilds.cache.get('609376315648245810').channels.cache.get('685126107141242960').send(`${message.author} Notified The Group That They Are Playing`)
		  }
		else  if (message.content.startsWith('.isplaying')){
			const users = message.mentions.users.first(7);
			if (users.length < 1) {
				message.reply (`You Didn't Mention Anyone, Dummy!`)
			}
			else if (users.length === 1) {
				message.delete()
				message.channel.send (`Hey! <@&665427708464857101> ${users} is playing!`)
			}
			else if (users.length >= 2){
				message.delete()
				message.channel.send (`Hey! <@&665427708464857101> ${users} are playing!`)
			}
			}
		else if (message.content.startsWith('.poll')){
			message.delete()
			const [command, ...args] = message.content.split (" ");
			client.guilds.cache.get('609376315648245810').channels.cache.get('683524213239447614').send(`Poll To ${args.join(" ")} (Started By ${message.author})`)
			.then (function(message){
			message.react('✅')
			message.react('❌')
			})}
		else if (message.content === '.' || message.content.startsWith('<@!684702198327934983>') || message.content.startsWith('<@&685100785532665868>')){
			message.channel.send(`Hello ${message.author} :wave:, Can i Help You In Any Way?`)
		}
		else if (message.content.startsWith('.notify')){
			message.delete()
			const user1 = message.mentions.users.first(100)
			if (user1.length > 0){
			message.channel.send(`Hey, ${user1}! ${message.author} wants to play`)
				}
			if (user1.length === 0){
				message.channel.send(`Hey, ${message.author} tag someone!`)
				}
			}
		});
