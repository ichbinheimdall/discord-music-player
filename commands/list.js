const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'queue',
     aliases: ['liste','list', 'q']
 }
 
 module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('#EB459E').setDescription("**<:red:909510496284196874> Botla aynı kanalda olmalısın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('#EB459E').setDescription("**<:red:909510496284196874> Lütfen bir sesli kanala girin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**<:red:909510496284196874> Şu anda oynatma listesinde şarkı yok!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

let queue = client.player.getQueue(message);
message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`**Sunucu - ${message.guild.name} :bar_chart:**\n\nOynatılan şarkı: ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => { return `**#${i + 1}** - ${track.title} | ${track.author} (${track.requestedBy.username} tarfından istendi)`}).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Ve **${queue.tracks.length - 5}** daha şarkı...` : `Şu anda oynatma listesinde **${queue.tracks.length}** şarkı var`}`)).setTimestamp().setFooter(`${config.EmbedFooter}`));

};
