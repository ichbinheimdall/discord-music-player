const { MessageEmbed } = require("discord.js");

module.exports.config = { 
    name: 'mix',
    aliases: ['karistir','karıştır']
}

module.exports.sex = async(client, message, args, config) => {

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**<a:red:990277321414045767> Botla aynı kanalda olmalısın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
    if (!message.member.voice.channel) return message.channel.send( new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**<a:red:990277321414045767> Lütfen bir sesli kanala girin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

    if (!client.player.getQueue(message)) return message.channel.send( new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**<a:red:990277321414045767> Şu anda oynatma listesinde şarkı yok!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

    client.player.shuffle(message);
 
    message.channel.send( new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`<:onay:909504199992168468> **${client.player.getQueue(message).tracks.length}** adet şarkı başarıyla karıştırıldı!`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

