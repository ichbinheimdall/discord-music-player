const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'play',
    aliases: ['oynat','çal','cal','p']
}

module.exports.sex = async(client, message, args, config) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**<:red:909510496284196874> Botla aynı kanalda olmalısın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
  
if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**<:red:909510496284196874> Şarkı açmak için lütfen herhangi bir ses kanalına girin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!args[0]) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**<:red:909510496284196874> Lütfen bir şarkı ismi yazın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.play(message, args.join(" "));

};
