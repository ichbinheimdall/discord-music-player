const { MessageEmbed } = require("discord.js");

module.exports.config = {
    name: "info",
    aliases: ["bilgilendirme", "bilgi"],
};

module.exports.sex = async (client, message, args, config) => {
if(message.author.id !== "387675598044135436") return message.channel.send(`bu komutu kullanamazsin`)
    message.channel.send(
        new MessageEmbed()
            .setColor("#EB459E")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setDescription(`
            :hologram: **${client.guilds.cache.size.toLocaleString()}** sunucuya hizmet veriyorum.
:hologram: **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** kullanıcıya hizmet veriyorum.
:hologram: Pingim: **${client.ws.ping}**
`)
            .setTimestamp()
            .setFooter(`${config.EmbedFooter}`)
    );
};
