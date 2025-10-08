const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'ping',
        aliases: ['ms','gecikme','ping']
}

module.exports.hmd = async(client, message, args, config) => {

message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ Ping: **${client.ws.ping}ms**`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

