# Contributing to Musician Bot

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## How to Contribute

### Reporting Bugs

1. Check existing [issues](https://github.com/ichbinheimdall/musician-bot/issues) to avoid duplicates
2. Use a clear, descriptive title
3. Include steps to reproduce the issue
4. Describe expected vs actual behavior
5. Include Node.js version and OS information

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its use case
3. Explain how it would benefit users

### Pull Requests

1. **Fork** the repository
2. **Clone** your fork locally
3. Create a **feature branch**: `git checkout -b feature/your-feature`
4. Make your changes
5. **Test** your changes locally
6. **Commit** with clear messages: `git commit -m 'Add: brief description'`
7. **Push** to your fork: `git push origin feature/your-feature`
8. Open a **Pull Request** against `main`

## Code Style

- Use consistent indentation (2 spaces)
- Follow existing code patterns
- Add comments for complex logic
- Keep functions focused and small

## Commit Messages

Use clear, descriptive commit messages:

```
Add: new shuffle algorithm for mix command
Fix: voice channel permission check
Update: dependencies to latest versions
Docs: improve configuration section
```

## Adding New Commands

1. Create a new file in `commands/` directory
2. Export `config` with `name` and `aliases`
3. Export `hmd` async function with `(client, message, args, config)`
4. Follow existing command patterns for consistency

Example:

```js
const { MessageEmbed } = require('discord.js');

module.exports.config = {
    name: 'mycommand',
    aliases: ['mc', 'myc']
};

module.exports.hmd = async (client, message, args, config) => {
    // Your command logic here
};
```

## Questions?

Feel free to open an issue for any questions or discussions.

---

Thank you for contributing! 🎵
