const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'help',
     aliases: ['yardım','komutlar']
 }
 
 module.exports.sex = async(client, message, args, config) => {

let prefix = config.BotPrefixes[Math.floor(Math.random() * config.BotPrefixes.length)];

message.channel.send(new MessageEmbed()            
.setColor("#EB459E")
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setTitle('<:yan:909473876981977118> Musician  Bot Komutları')
.setFooter(`${message.author.tag} tarafından istendi.`)
.setTimestamp()
.setDescription(`
<a:100:990276334435586058> Komutlar için \`${prefix}yardım\` yazabilirsin.

<:space:990276555131465729>  <a:settings:990276448185106512> **Komutlar:**
<:arrow:990277284281872424> **${prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
<:arrow:990277284281872424> **${prefix}pause**: Şarkıyı durdurur.
<:arrow:990277284281872424> **${prefix}resume**: Durdurulan şarkıyı devam ettirir.
<:arrow:990277284281872424> **${prefix}loop**: Şarkıyı tekrardan oynatır.
<:arrow:990277284281872424> **${prefix}skip**: Varsa listedeki diğer şarkılara geçer.
<:arrow:990277284281872424> **${prefix}stop**: Şarkıyı durdurur. 
<:arrow:990277284281872424> **${prefix}np**: o an çalan şarkıyı gösterir.
<:arrow:990277284281872424> **${prefix}list**: Şarkıları gösterir.
<:arrow:990277284281872424> **${prefix}mix**: Şarkıları karıştırır.
<:arrow:990277284281872424> **${prefix}ping**: Botun gecikme süresini gösterir.

<:space:990276555131465729>  <a:settings:990276448185106512> **Bot Hakkında:**
<a:hologram:990277266892263475> Botu sunucuna eklemek/davet etmek için \`${prefix}davet\` yazabilirsin.
<a:hologram:990277266892263475> Destek sunucusuna katılmak için \`${prefix}destek\` yazabilirsin.
<a:hologram:990277266892263475> Bot top.gg üzerinden oy verip destek olmak için \`${prefix}oy\` yazabilirsin. 
`)
.setThumbnail("")
.setImage(""))

};