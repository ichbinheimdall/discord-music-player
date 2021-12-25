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
:star: Komutlar için \`${prefix}komutlar\` yazabilirsin.
<:bosluk:909565384775065670>  <a:ayar:909561268128591872> **Komutlar:**
<:ok:909555365056753755> **${prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
<:ok:909555365056753755> **${prefix}pause**: Şarkıyı durdurur.
<:ok:909555365056753755> **${prefix}resume**: Durdurulan şarkıyı devam ettirir.
<:ok:909555365056753755> **${prefix}loop**: Şarkıyı tekrardan oynatır.
<:ok:909555365056753755> **${prefix}skip**: Varsa listedeki diğer şarkılara geçer.
<:ok:909555365056753755> **${prefix}stop**: Şarkıyı durdurur. 
<:ok:909555365056753755> **${prefix}np**: o an çalan şarkıyı gösterir.
<:ok:909555365056753755> **${prefix}list**: Şarkıları gösterir.
<:ok:909555365056753755> **${prefix}mix**: Şarkıları karıştırır.
<:ok:909555365056753755> **${prefix}ping**: Botun gecikme süresini gösterir.
<:bosluk:909565384775065670>  <a:ayar:909561268128591872> **Bot Hakkında:**
<a:hologram:907617268173783060> Botu sunucuna eklemek/davet etmek için \`${prefix}davet\` yazabilirsin.
<a:hologram:907617268173783060> Destek sunucusuna katılmak için \`${prefix}destek\` yazabilirsin.
<a:hologram:907617268173783060> Bot top.gg üzerinden oy verip destek olmak için \`${prefix}oy\` yazabilirsin. 
`)
.setThumbnail("")
.setImage(""))

};