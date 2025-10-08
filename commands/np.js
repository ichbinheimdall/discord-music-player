const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'np',
    aliases: ['çalanşarkı','calansarki','nowplaying','np']
}

module.exports.hmd = async(client, message, args, config) => {

if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ Please join a voice channel first!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor("#EB459E").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setDescription("**⚠️ There is no song playing right now!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

const track = await client.player.nowPlaying(message);
const filters = [];
Object.keys(client.player.getQueue(message).filters).forEach((filterName) => { if (client.player.getQueue(message).filters[filterName]) filters.push(filterName); });

message.channel.send({ embed: { color: '#EB459E', author: { name: track.title }, footer: { text: `${config.EmbedFooter}` },
    fields: [ { name: 'Channel', value: track.author, inline: true }, { name: 'Requested by', value: track.requestedBy.username, inline: true },
                { name:  "From playlist?", value: track.fromPlaylist ? 'Yes' : 'No', inline: true },
                { name: 'Views', value: track.views, inline: true },
                { name: 'Duration', value: track.duration, inline: true },
                { name: 'Active filters', value: filters.length, inline: true },
                { name: 'Progress', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
};

