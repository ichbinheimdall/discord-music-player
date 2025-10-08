const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'play',
    aliases: ['oynat','çal','cal','p','play']
}

module.exports.hmd = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ You must be in the same voice channel as the bot!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ Please join a voice channel to play music!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!args[0]) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ Please provide a song name or URL!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.play(message, args.join(" "));

};
