const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'help',
     aliases: ['yardım','komutlar','help','commands']
 }
 
 module.exports.hmd = async(client, message, args, config) => {

let prefix = config.BotPrefixes[Math.floor(Math.random() * config.BotPrefixes.length)];

message.channel.send(new MessageEmbed()            
.setColor("#EB459E")
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setTitle('♻️ Music Bot Commands')
.setFooter(`${message.author.tag} requested this.`)
.setTimestamp()
.setDescription(`
💯 For detailed commands type \`${prefix}help\`.

🌍 ⚙️ **Commands:**
➡️ **${prefix}play <song name>**: Plays the requested song.
➡️ **${prefix}pause**: Pauses the current song.
➡️ **${prefix}resume**: Resumes a paused song.
➡️ **${prefix}loop**: Toggles loop for the current track/queue.
➡️ **${prefix}skip**: Skips to the next song in the queue if available.
➡️ **${prefix}stop**: Stops playback and clears the queue. 
➡️ **${prefix}np**: Shows the currently playing song.
➡️ **${prefix}list**: Shows the song queue.
➡️ **${prefix}mix**: Shuffles the queue.
➡️ **${prefix}ping**: Shows the bot's latency.

🌍 ⚙️ **About the Bot:**
🚀 To invite the bot to your server type \`${prefix}invite\`.
🚀 To join the support server type \`${prefix}support\`.
🚀 To support on top.gg type \`${prefix}vote\`.
`)
.setThumbnail("")
.setImage(""))

};