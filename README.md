# Discord Music Player

[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)
[![discord.js](https://img.shields.io/badge/discord.js-v12-blue.svg)](https://discord.js.org/)

A lightweight Discord music bot built with discord.js and discord-player. Includes common music controls, a modular command structure, and pre-wired player events.

## Features

- **Full playback**: play, pause, resume, skip, stop, loop
- **Queue management**: view, shuffle, and clear the queue
- **Rich embeds**: formatted feedback messages for all interactions
- **Modular commands**: easily extend with new features
- **Heroku-ready**: includes `Procfile` for quick deployment

## Prerequisites

- Node.js v14 or later (v16+ recommended)
- FFmpeg installed on the host system
- [Discord bot token](https://discord.com/developers/applications)

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt install ffmpeg
```

## Quick Start

```bash
git clone https://github.com/umutguden/discord-music-player.git
cd discord-music-player
npm install

# Configure the bot (see below), then start:
npm start
```

## Configuration

### config.json

Update `config.json` with your values:

```json
{
  "Client_Token": "YOUR_BOT_TOKEN",
  "DeveloperID": "YOUR_DISCORD_USER_ID",
  "BotPrefixes": ["-"],
  "CustomStatus": "-help | Musician Bot",
  "EmbedFooter": "Musician Bot",
  "StreamingURL": "https://www.twitch.tv/discord",
  "InviteLink": "YOUR_INVITE_URL",
  "SupportServer": "YOUR_SUPPORT_SERVER",
  "VoteLink": "YOUR_TOPGG_VOTE_LINK"
}
```

### Environment Variables

For production, use environment variables instead of hardcoding tokens:

```bash
cp .env.example .env
```

```bash
CLIENT_TOKEN=your_discord_bot_token
DEVELOPER_ID=your_discord_user_id
```

Environment variables override `config.json` values automatically.

> **Security**: Never commit your bot token to version control.

## Commands

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

## Project Structure

```
discord-music-player/
├── app.js               # Main entry point and player events
├── config.json          # Bot configuration
├── .env                 # Environment variables (gitignored)
├── .env.example         # Environment template
├── package.json         # Dependencies and scripts
├── Procfile             # Heroku deployment
├── CONTRIBUTING.md      # Contribution guidelines
├── LICENSE              # MIT Licence
└── commands/            # Command implementations
    ├── play.js
    ├── pause.js
    ├── resume.js
    ├── skip.js
    ├── stop.js
    ├── loop.js
    ├── mix.js
    ├── np.js
    ├── list.js
    ├── clear-list.js
    ├── ping.js
    ├── help.js
    ├── info.js
    └── links.js
```

## Deployment

### Heroku

1. Create a Heroku app.
2. Set `CLIENT_TOKEN` in Config Vars.
3. Deploy via Git or GitHub integration. The included `Procfile` handles startup.

### Other Platforms

Set the `CLIENT_TOKEN` environment variable and run `npm start`.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot does not join voice | Check `CONNECT` and `SPEAK` permissions |
| No audio | Ensure FFmpeg is installed and accessible |
| Login failed | Verify your bot token is correct and not revoked |
| Commands not working | Check the prefix and bot permissions in the channel |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Licence

MIT. See [LICENSE](LICENSE).

## Acknowledgements

Based on work by Klanter. Built with [discord.js](https://discord.js.org/) and [discord-player](https://discord-player.js.org/).
