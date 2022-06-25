const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'info',
    aliases: ['bilgi','bilgilendirme']
}

module.exports.sex = async(client, message, args, config) => {

message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`<a:hologram:907617268173783060> **${client.guilds.cache.size.toLocaleString()}** sunucuya hizmet veriyorum. <a:hologram:907617268173783060> **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** kullanıcıya hizmet veriyorum. <a:hologram:907617268173783060> Pingim: **${client.ws.ping}**`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};
