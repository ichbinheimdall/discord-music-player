const { MessageEmbed } = require("discord.js");

module.exports.config = { 
    name: 'loop',
    aliases: ['döngü', 'tekrar', 'loop', 'repeat']
}

module.exports.hmd = async (client, message, args, config) => {
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
        return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ You must be in the same voice channel as the bot!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    }

    if (!message.member.voice.channel) {
        return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ Please join a voice channel first!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    }

    if (!client.player.getQueue(message)) {
        return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ Add a song to the queue to enable loop!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    }

    const repeatMode = client.player.getQueue(message).repeatMode;
    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ Loop has been **disabled**!`).setTimestamp().setFooter(`${config.EmbedFooter}`));
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ Loop has been **enabled**!`).setTimestamp().setFooter(`${config.EmbedFooter}`));
    }
};
