const { MessageEmbed } = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

module.exports.config = {
    name: "info",
    aliases: ["bilgilendirme", "bilgi"],
};

module.exports.sex = async (client, message, args, config) => {
if(message.author.id !== "387675598044135436") return message.channel.send(`<a:red:990277321414045767> Bu komut yalnızca geliştiricime özeldir.`)
    message.channel.send(
        new MessageEmbed()
            .setColor("#EB459E")
            .setThumbnail(client.user.avatarURL())
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setDescription(`
            <a:hologram:990277266892263475> **${client.guilds.cache.size.toLocaleString()}** sunucuya hizmet veriyorum.
            <a:hologram:990277266892263475> **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** kullanıcıya hizmet veriyorum.
            <a:hologram:990277266892263475> Pingim: **${client.ws.ping}**
            <a:hologram:990277266892263475> **${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}** dir aktifim.
            `)
            .setTimestamp()
            .setFooter(`${config.EmbedFooter}`)
    );
};
