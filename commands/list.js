const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'queue',
    aliases: ['liste','list', 'q', 'queue']
 }
 
 module.exports.hmd = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('#EB459E').setDescription("**⚠️ You must be in the same voice channel as the bot!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

    if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('#EB459E').setDescription("**⚠️ Please join a voice channel first!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
     
    if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ There are no songs in the queue right now!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
     
    let queue = client.player.getQueue(message);
    message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`**:bar_chart: Server: ${message.guild.name}**\n\nCurrently playing: **${queue.playing.title} | ${queue.playing.author}**\n\n` + (queue.tracks.map((track, i) => { return `**#${i + 1}** - ${track.title} | ${track.author} (**${track.requestedBy.username}** requested)`}).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** more songs...` : `There are **${queue.tracks.length}** songs in the queue right now`}`)).setTimestamp().setFooter(`${config.EmbedFooter}`));

};
