# Musician Bot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)
[![discord.js](https://img.shields.io/badge/discord.js-v12-blue.svg)](https://discord.js.org/)

A lightweight Discord music bot built with **discord.js** and **discord-player**. Ready-to-run with common music controls, modular command structure, and pre-wired player events.

## ✨ Features

- 🎵 **Full music playback** — play, pause, resume, skip, stop, loop
- 📋 **Queue management** — view, shuffle, and clear the queue
- 🎨 **Rich embeds** — beautiful feedback messages for all interactions
- ⚡ **Modular commands** — easily extend with new features
- 🚀 **Heroku-ready** — includes `Procfile` for quick deployment
- 🔒 **Security-first** — environment variable support for tokens

## 📦 Prerequisites

- **Node.js** v14+ (recommended v16+)
- **npm** or **yarn**
- **FFmpeg** installed on the host system
- A [Discord Bot Token](https://discord.com/developers/applications)

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt install ffmpeg

# Or use ffmpeg-static (bundled in dependencies)
```

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ichbinheimdall/musician-bot.git
cd musician-bot

# Install dependencies
npm install

# Configure the bot (see Configuration section)
# Then start:
npm start
```

## ⚙️ Configuration

### Option 1: Environment Variables (Recommended)

Create a `.env` file or set environment variables:

```bash
CLIENT_TOKEN=your_discord_bot_token
```

Then modify `app.js` to read from environment:

```js
const BotConf = require('./config.json');
BotConf.Client_Token = process.env.CLIENT_TOKEN || BotConf.Client_Token;
```

### Option 2: config.json (Local Development)

Edit `config.json` with your values:

```json
{
  "Client_Token": "YOUR_BOT_TOKEN",
  "DeveloperID": "YOUR_DISCORD_ID",
  "BotPrefixes": ["-"],
  "CustomStatus": "-help",
  "EmbedFooter": "Musician Bot",
  "StreamingURL": "https://www.twitch.tv/discord",
  "InviteLink": "YOUR_INVITE_URL",
  "SupportServer": "YOUR_SUPPORT_SERVER",
  "VoteLink": "YOUR_TOPGG_VOTE_LINK"
}
```

> ⚠️ **Never commit your bot token to a public repository!**

## 🎮 Commands

Default prefix: `-`

| Command | Description |
|---------|-------------|
| `-play <song>` | Play a song (search term or URL) |
| `-pause` | Pause playback |
| `-resume` | Resume playback |
| `-skip` | Skip to the next track |
| `-stop` | Stop playback and clear queue |
| `-loop` | Toggle loop mode |
| `-mix` | Shuffle the queue |
| `-np` | Show now playing info |
| `-list` | Display the queue |
| `-clear-list` | Clear the queue |
| `-ping` | Check bot latency |
| `-help` | Show all commands |
| `-links` | Get invite/support links |

## 📁 Project Structure

```
musician-bot/
├── app.js              # Main entry point & player events
├── config.json         # Bot configuration
├── package.json        # Dependencies & scripts
├── Procfile            # Heroku deployment
├── commands/           # Command implementations
│   ├── play.js
│   ├── pause.js
│   ├── resume.js
│   ├── skip.js
│   ├── stop.js
│   ├── loop.js
│   ├── mix.js
│   ├── np.js
│   ├── list.js
│   ├── clear-list.js
│   ├── ping.js
│   ├── help.js
│   ├── info.js
│   └── links.js
└── README.md
```

## 🚀 Deployment

### Heroku

1. Create a Heroku app
2. Set `CLIENT_TOKEN` in Config Vars
3. Deploy via Git or GitHub integration
4. The included `Procfile` handles startup

### Other Platforms

Set the `CLIENT_TOKEN` environment variable and run:

```bash
npm start
```

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot doesn't join voice | Check `CONNECT` and `SPEAK` permissions |
| No audio | Ensure FFmpeg is installed and accessible |
| Login failed | Verify your bot token is correct and not revoked |
| Commands not working | Check the prefix and bot permissions in the channel |

## 🔐 Security

- Use environment variables for sensitive data
- Never commit tokens to version control
- Use `.gitignore` to exclude config files with secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Based on work by [Klanter](https://github.com/klanter1337/Music-Bot)
- Built with [discord.js](https://discord.js.org/) and [discord-player](https://discord-player.js.org/)
