//Modules
const { Client, Collection, MessageEmbed, Message } = require("discord.js");
const { readdir } = require("fs");
const { Player } = require('discord-player');
const moment = require("moment")
require("moment-duration-format")
moment.locale("tr")

const BotConf = require('./config.json');
const client = new Client();
client.cooldown = new Set();
client.player = new Player(client);
client.commands = new Collection();
client.aliases = new Collection();

client.on('ready', async () => { 
  client.user.setActivity(`${BotConf.CustomStatus}`, { type: "STREAMING", url: "https://www.twitch.tv/ichbinheimdall"})
      .then(console.log('PASS - '+ client.user.tag +' ismiyle API\'ye bağlanıldı ve bot hazır durumda.'))
      .catch(() => console.log('ERROR - Belirsiz bir hata ile karşılaşıldı.'));
}); 

readdir('./commands', (err, files) => { 
  files.forEach(fs => { 
  let command = require(`./commands/${fs}`); 
  client.commands.set(command.config.name, command);
  if(command.config.aliases) command.config.aliases.forEach(Aliases => client.aliases.set(Aliases, command.config.name));
  });
});

client.on('message', async message => {
  if (!message.guild || message.author.bot || message.channel.type === 'dm') return;
  let prefix = BotConf.BotPrefixes.filter(p => message.content.startsWith(p))[0]; 
  if (!prefix) return;
  let config = BotConf;
  let args = message.content.split(' ').slice(1);
  let command = message.content.split(' ')[0].slice(prefix.length); 
  let load = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if (load){
   if (!message.member.hasPermission(8) && client.cooldown.has(message.author.id)) return message.channel.send(new MessageEmbed().setDescription('Yavaşla, **3** saniyede bir komut kullanabilirsin.').setFooter(BotConf.EmbedFooter).setColor('#EB459E').setTimestamp());
    client.cooldown.add(message.author.id);
    setTimeout(() => client.cooldown.delete(message.author.id), 3000);
    load.sex(client, message, args, config);
  };
});

client.player.on("trackStart", (message, track) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`<:onay:909504199992168468> ${track.title} isimli şarkı başarıyla ${message.member.voice.channel.name} kanalında çalıyor!`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on("botDisconnect", (message) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**<a:red:990277321414045767>️ - Müzik bittiği için sesli kanaldan ayrıldım.**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('channelEmpty', (message) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`<:onay:909504199992168468> Sesli kanaldaki herkes çıktığı için müziği kapattım.`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('noResults', (message, query) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**<a:red:990277321414045767>️ - ${query} isimli şarkı YouTube'da bulunamadı!**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('playlistAdd', (message, playlist) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`<:onay:909504199992168468> İçinde **${playlist.items.length}** adet şarkı bulunduran **${playlist.title}** başarıyla oynatma listesine eklendi.`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('queueEnd', (message) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**<a:red:990277321414045767>️ - Oynatma listesinde şarkı olmadığı için müzik durduruldu.**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('searchCancel', (message) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**<a:red:990277321414045767>️ - Geçerli bir argüman girmediniz! Lütfen tekrar deneyin.**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('searchInvalidResponse', (message, tracks) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**<a:red:990277321414045767>️ - Lütfen **1** ve **${tracks.length}** arasında bir sayı giriniz!**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('searchResults', (message, query, tracks) =>  message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`${query} için bulunan sonuçlar;`).setDescription(`${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));
  
client.player.on('trackAdd', (message, track) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`<:onay:909504199992168468> ${track.title} ismli şarkı başarıyla oynatma listesine eklendi!`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('error', (message, error) => { switch (error) {
  case 'NotPlaying': message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**<a:red:990277321414045767> Bu sunucuda müzik çalamıyorum!**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)); break;
  case 'NotConnected': message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**<a:red:990277321414045767> Şu anda bir sesli kanalda bulunmamaktasınız!**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)); break;
  case 'UnableToJoin': message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**<a:red:990277321414045767>️ - Bulunduğunuz kanala girmem için yeterli iznim yok, gerekli izinleri verdikten sonra lütfen tekrar deneyin.**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)); break;
  default: message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**<a:red:990277321414045767>️ - Bir şeyler ters gitti, lütfen botun sahibiyle iletişime geçin...**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`));
}; });

client.login(BotConf["Client_Token"]).catch(() => console.log("HATA - Bota giriş yapılırken başarısız olundu."));

client
.on('disconnect', () => console.log('HATA - Bot is disconnecting...'))
.on('reconnecting', () => console.log('HATA - Bot reconnecting...'))
.on('error', err => console.log(`HATA - ${err}`))
.on('warn', err => console.log(`HATA - ${err}`));

process
.on('unhandledRejection', err => console.log('HATA - ', err))
.on('uncaughtException', err => { console.log('HATA - ', err); process.exit(1); });
