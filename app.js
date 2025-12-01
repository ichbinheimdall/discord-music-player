// Load environment variables from .env file
require('dotenv').config();

// Modules
const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdir } = require("fs");
const { Player } = require('discord-player');
const moment = require("moment");
require("moment-duration-format");
moment.locale("en");

// Load config and override with environment variables
const BotConf = require('./config.json');
BotConf.Client_Token = process.env.CLIENT_TOKEN || BotConf.Client_Token;
BotConf.DeveloperID = process.env.DEVELOPER_ID || BotConf.DeveloperID;
const client = new Client();
client.cooldown = new Set();
client.player = new Player(client);
client.commands = new Collection();
client.aliases = new Collection();

client.on('ready', async () => { 
  client.user.setActivity(`${BotConf.CustomStatus}`, { type: "STREAMING", url: `${BotConf.StreamingURL}` })
      .then(console.log('PASS - Connected to the API as '+ client.user.tag +' and the bot is ready.'))
      .catch(() => console.log('ERROR - An unknown error occurred.'));
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
   if (!message.member.hasPermission(8) && client.cooldown.has(message.author.id)) return message.channel.send(new MessageEmbed().setDescription('Slow down, you can use a command every **3** seconds.').setFooter(BotConf.EmbedFooter).setColor('#EB459E').setTimestamp());
    client.cooldown.add(message.author.id);
    setTimeout(() => client.cooldown.delete(message.author.id), 3000);
    load.hmd(client, message, args, config);
  };
});

client.player.on("trackStart", (message, track) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ The song ${track.title} is now playing in ${message.member.voice.channel.name}!`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on("botDisconnect", (message) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**❌ - I left the voice channel because the music ended.**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('channelEmpty', (message) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ I stopped the music because everyone left the voice channel.`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('noResults', (message, query) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**❌ - The song named ${query} could not be found on YouTube!**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('playlistAdd', (message, playlist) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ The playlist **${playlist.title}** with **${playlist.items.length}** songs has been added to the queue.`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('queueEnd', (message) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**❌ - The music stopped because there are no more songs in the queue.**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('searchCancel', (message) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**❌ - You did not enter a valid argument! Please try again.**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('searchInvalidResponse', (message, tracks) => message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**❌ - Please enter a number between **1** and **${tracks.length}**!**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('searchResults', (message, query, tracks) =>  message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`Results found for ${query}:`).setDescription(`${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));
  
client.player.on('trackAdd', (message, track) => message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription(`✅ The song ${track.title} has been added to the queue!`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`)));

client.player.on('error', (message, error) => { switch (error) {
  case 'NotPlaying': message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**⚠️ I can't play music in this server!**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)); break;
  case 'NotConnected': message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**⚠️ You are not currently in a voice channel!**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)); break;
  case 'UnableToJoin': message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription("**❌ - I don't have enough permissions to join your channel, please grant the necessary permissions and try again.**").setTimestamp().setFooter(`${BotConf.EmbedFooter}`)); break;
  default: message.channel.send(new MessageEmbed().setColor("RANDOM").setDescription(`**❌ - Something went wrong, please contact the bot owner...**`).setTimestamp().setFooter(`${BotConf.EmbedFooter}`));
}; });

client.login(BotConf["Client_Token"]).catch(() => console.log("ERROR - Failed to login to the bot."));

client
.on('disconnect', () => console.log('ERROR - Bot is disconnecting...'))
.on('reconnecting', () => console.log('ERROR - Bot reconnecting...'))
.on('error', err => console.log(`ERROR - ${err}`))
.on('warn', err => console.log(`ERROR - ${err}`));

process
.on('unhandledRejection', err => console.log('ERROR - ', err))
.on('uncaughtException', err => { console.log('ERROR - ', err); process.exit(1); });
