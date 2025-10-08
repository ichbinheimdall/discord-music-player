const { MessageEmbed } = require("discord.js");

module.exports.config = { 
    name: 'stop',
    aliases: ['durdur','dur','stop']
}

module.exports.hmd = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ You must be in the same voice channel as the bot!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ Please join a voice channel first!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ There are no songs in the queue right now!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.setRepeatMode(message, false);

client.player.stop(message);

message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ Playback has been stopped successfully!`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};
