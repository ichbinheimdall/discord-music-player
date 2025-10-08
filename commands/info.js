const { MessageEmbed } = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

module.exports.config = {
    name: "info",
    aliases: ["bilgilendirme", "bilgi", "information"],
};

module.exports.hmd = async (client, message, args, config) => {
if(message.author.id !== `${config.DeveloperID}`) return message.channel.send(`⚠️ This command is restricted to the bot developer.`)
    message.channel.send(
        new MessageEmbed()
            .setColor("#EB459E")
            .setThumbnail(client.user.avatarURL())
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setDescription(`
            🚀 Serving **${client.guilds.cache.size.toLocaleString()}** servers.
            🚀 Serving **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** users.
            🚀 Ping: **${client.ws.ping}ms**
            🚀 Uptime: **${moment.duration(client.uptime).format(" D [days], H [hours], m [minutes], s [seconds]")}**
            `)
            .setTimestamp()
            .setFooter(`${config.EmbedFooter}`)
    );
};
