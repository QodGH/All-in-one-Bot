const Discord = module.require("discord.js");

module.exports = {
	name: "delchannel",
	description: "Delete Channels From your Server",
	run: async(client, message, args) => {
	if (!message.member.hasPermission("MANAGE_CHANNELS")) {
	return message.channel.send("You don't have enough Permissions")
	}
	if (!args[0]) {
	return message.channel.send("Please type the channel name")
	}
	let fetchedChannel = message.guild.channels.cache.find(r => r.name === `${args[0]}`);
	fetchedChannel.delete()

	const embed = new Discord.MessageEmbed()
	.setTitle("Channel Updates")
	.setDescription ("Channel has been deleted")
	.setColor("RANDOM");
	
	message.channel.send(embed);
}
}