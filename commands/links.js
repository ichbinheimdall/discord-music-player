const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'invite',
    aliases: ['davet','destek','oy','invite','ekle','add','vote','support','invite-link','links']
 }
 
 module.exports.hmd = async(client, message, args, config) => {

let prefix = config.BotPrefixes[Math.floor(Math.random() * config.BotPrefixes.length)];

message.channel.send(new MessageEmbed()            
.setColor("#EB459E")
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setDescription(`
🚀 [Click here to invite the bot to your server](${config.InviteLink})
🚀 [Click here to join the support server](${config.SupportServer})
🚀 [Click here to vote on Top.gg](${config.VoteLink})
`))

};
