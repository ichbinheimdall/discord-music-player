const { MessageEmbed } = require("discord.js");

module.exports.config = { 
    name: 'pause',
    aliases: ['duraklat', 'bekle', 'pause']
}

module.exports.hmd = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ You must be in the same voice channel as the bot!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
if (!message.member.voice.channel) return message.channel.send( new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ Please join a voice channel first!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send( new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ There are no songs to pause!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
client.player.pause(message);

message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ ${client.player.getQueue(message).playing.title} has been paused successfully!`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

