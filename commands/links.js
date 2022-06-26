const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'davet',
     aliases: ['destek','oy','invite','ekle','add','vote','support',]
 }
 
 module.exports.sex = async(client, message, args, config) => {

let prefix = config.BotPrefixes[Math.floor(Math.random() * config.BotPrefixes.length)];

message.channel.send(new MessageEmbed()            
.setColor("#EB459E")
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setDescription(`
<a:hologram:990277266892263475> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=911395278161080351&permissions=8&scope=bot%20applications.commands)
<a:hologram:990277266892263475> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/b8e2EKJpry)
<a:hologram:990277266892263475> Top.gg üzerinden oy yakında..
`))

};
