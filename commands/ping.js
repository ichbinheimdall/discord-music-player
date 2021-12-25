const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'ping',
    aliases: ['ms','gecikme']
}

module.exports.sex = async(client, message, args, config) => {

message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`<:onay:909504199992168468> Ping: **${client.ws.ping}ms**`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

