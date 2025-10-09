
# Discord Music Player

A lightweight Discord music bot skeleton built on discord.js and discord-player. This repo gives you a ready-to-run bot with common music controls (play, pause, skip, queue, loop, etc.), a simple command structure under `commands/`, and pre-wired player events.

## Highlights

- Uses `discord.js` and `discord-player` for playback
- Modular commands in the `commands/` folder
- Pre-wired player event handlers with helpful embed messages
- `Procfile` included for Heroku-style deployment

## Prerequisites

- Node.js (recommended v16+)
- npm (or yarn)
- A Discord bot token (create one at https://discord.com/developers)
- FFmpeg installed on the host system (required by many audio backends). On macOS:

```bash
brew install ffmpeg
```

Optional: use `ffmpeg-static` in the project if you want a bundled binary instead of installing system-wide FFmpeg.

## Quick setup

1. Clone the repo and open it:

```bash
git clone https://github.com/ichbinheimdall/musician-bot.git
cd musician-bot
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Configure the bot. Two approaches:

- Edit `config.json` (simple local testing). Fill `Client_Token` and other placeholders.
- Preferred for production: use environment variables and fall back to `config.json`.

Example `config.json` (already present in repo):

```json
{
  "Client_Token": "Client_Token",
  "DeveloperID": "YOUR_DISCORD_ID",
  "BotPrefixes": ["-"],
  "CustomStatus": "-invite | -help",
  "EmbedFooter": "-invite | -help",
  "StreamingURL": "https://www.twitch.tv/TWITCH_USERNAME",
  "InviteLink": "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands",
  "SupportServer": "https://discord.com/invite/YOUR_SUPPORT_SERVER",
  "VoteLink": "https://top.gg/bot/YOUR_BOT_ID/vote"
}
```

A small change in `app.js` lets the bot read the token from an environment variable if present (recommended for hosting):

```js
const BotConf = require('./config.json');
BotConf.Client_Token = process.env.CLIENT_TOKEN || BotConf.Client_Token;
```

4. Start locally:

```bash
node app.js
```

If configured correctly the bot will log in and set its activity/status.

## Gateway intents (discord.js v13+)

If you're using discord.js v13 or newer you must pass gateway intents when creating the `Client`. Example:

```js
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_VOICE_STATES,
  Intents.FLAGS.GUILD_MESSAGES
]});
```

Enable privileged intents (if you use them) on the bot page in the Discord Developer Portal when required.

## Commands

All commands use the prefix configured in `config.json` (default: `-`). Implementations live in the `commands/` folder. Main commands included:

- `play` — Play a track (search term or URL). Example: `-play <song or url>`
- `pause` — Pause playback
- `resume` — Resume playback
- `skip` — Skip the current track
- `stop` — Stop playback and clear the queue
- `loop` — Toggle loop mode
- `mix` — Shuffle/mix the queue
- `list` — Show the current queue
- `clear-list` — Clear the current queue
- `np` — Now playing info
- `info` — Bot/server information
- `links` — Invite/support/vote links from `config.json`
- `help` — Show help text
- `ping` — Latency check

Open the `commands/` files to customize behavior or help text.

## Player events and feedback

`app.js` wires `client.player` events to send embed messages for events like `trackStart`, `trackAdd`, `playlistAdd`, `noResults`, `queueEnd`, `channelEmpty`, and normalized error handling. Those embeds use `EmbedFooter` from `config.json` and provide consistent feedback to users.

## Deployment

The repo includes a `Procfile` for Heroku. For production, avoid committing your token. Instead, set an environment variable (recommended):

1. Add the token to your host's config (Heroku Config Vars, Docker secrets, systemd unit, etc.) as `CLIENT_TOKEN`.
2. Ensure `app.js` reads `process.env.CLIENT_TOKEN` (see example above).
3. Deploy and let the `Procfile` start the bot.

When creating an invite URL, give the bot permissions to connect and speak in voice channels (CONNECT, SPEAK). The sample `InviteLink` in `config.json` uses `permissions=8` (administrator) which is broader than required for most bots — prefer least privilege.

## Common troubleshooting

- Bot doesn't join voice channel: check the bot has `CONNECT` and `SPEAK` permissions and that FFmpeg is installed and accessible.
- No audio or distorted playback: ensure a compatible FFmpeg is installed (system or `ffmpeg-static`).
- Bot fails to login: verify the token (and that it isn't revoked) and confirm `CLIENT_TOKEN`/`config.json` values.
- Commands not responding: confirm messages start with the configured prefix and the bot has permission to read/send messages in the channel.
- Missing intents errors: add the required gateway intents as shown above and enable them in the Developer Portal if they're privileged.

## Security notes

- Never commit your bot token to a public repository.
- Use environment variables or secret managers for production deployments.

## Contributing

Contributions welcome. Suggested flow:

1. Fork the repo
2. Create a branch for your change
3. Open a pull request with a clear description and manual test steps

Keep changes focused and include tests or reproducible steps when possible.

## Files of interest

- `app.js` — Main bot entry and player event wiring
- `config.json` — Default configuration (local testing / fallback)
- `commands/` — Command implementations
- `Procfile` — Heroku-style start file

## Quick checklist (smoke test)

1. Set `CLIENT_TOKEN` (or update `config.json`) and run `node app.js`.
2. Invite the bot to a test server and join a voice channel.
3. Use `-play <song>` to confirm the bot can search and play audio.

## Attribution

This project is based on work by [Klanter](https://github.com/klanter1337/Music-Bot).
