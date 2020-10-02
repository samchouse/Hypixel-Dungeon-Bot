Hypixel Dungeon Bot
=======================

Hypixel Dungeon Bot is a Discord bot created for [Hypixel's](https://hypixel.net/) custom gamemode, Skyblock. The bot's primary purpose is to help dungeon players to check which of their teammates are online on Hypixel from the comfort of Discord. You may be thinking, "I have a friend list, why would I need this Discord bot", and the answer is quite simple. This bot shows the teammates Catacombs level, and their highest class level without having to go to a website to check their stats. It also helps if you're the kind of person to have 1000 friends but can't be bothered to look through all of them for your teammates.

## Features

 * Verification system to verify players IGNs.
 * Commands to track and see stats for skills, slayers, bank, auction house, talismans, & pets.
 * Command to check if your teammates are online. It also lists them from best to worse using their catacombs level.
 * More coming soon.
 
<hr>

## Table of Content

 - [Prerequisites](#prerequisites)
 - [Installing Hypixel Dungeon Bot](#installing-hypixel-dungeon-bot)
 - [Updating Hypixel Dungeon Bot](#updating-hypixel-dungeon-bot)
 - [Configuration](#configuration)
 - [Third Party Licenses](#third-party-licenses)
 - [License](#license)
 
### Prerequisites

##### App (Bot)
 * Node JS >= 12.0.0
 * NPM >= 6.9.0
 * MongoDB Server
 * Git

### Installing Hypixel Dungeon Bot

To get started, clone the repository to your computer using:

    git clone https://github.com/Xenfo/Hypixel-Dungeon-Bot.git

Next go into the `Hypixel-Dungeon-Bot` folder to install the dependencies.

    npm install

Once the dependencies have installed, you can now run the config generator to generate the `config.json` file.

    npm run config

After you're finished editing the config with your personal details, run the bot.
    
    node app.js
    
If the bot starts up without any errors it should now work, and you can invite it to Discord servers.

### Updating Hypixel Dungeon Bot
    
To update the bot to the latest version go into the `Hypixel-Dungeon-Bot` folder.
    
    git pull https://github.com/Xenfo/Hypixel-Dungeon-Bot.git
    
Next we will update the dependencies using:
  
    npm install
    
After the dependencies have finished installing start the bot.

    node app.js
    
### Configuration

#### Discord Token

The Discord token is used to login to Discord's web services, allowing the bot to go online and respond to commands. If you don't already have a Discord bot application setup you can create one by going to the [Discord Developer Portal](https://discord.com/developers/applications/me), then create a new application, give it a name, go to the "Bot" tab, then click on "Add Bot", and you're good to go!

#### Hypixel Token

The Hypixel token is used to communicate with Hypixel's API, allowing to bot to get player, profile, and guild information for the Skyblock gamemode. If you don't already have a Hypixel API token you can get one by logging into the server using `mc.hypixel.net` and running `/api`.

#### Database

The database property is used to connect to the database that the bot should use, the database is required for the bot to function correctly since UUIDs, player usernames, and profile data is cached for long periods in the database, as-well-as verification so the bot remembers which Discord account is linked with what Minecraft username.

> **Note** The MongoDB user must be able to read and write to the database since the bot needs to save info like your teammates' username, UUID, and more.

## Third Party Licenses

Hypixel Dungeon Bot relies on the following projects:

 Name | License  |
|:---|:---|
| [Hypixel API](https://github.com/HypixelDev/PublicAPI) | [MIT](https://github.com/HypixelDev/PublicAPI/blob/master/LICENSE) |
| [Mojang API](https://github.com/Electroid/mojang-api) | [MIT](https://github.com/Electroid/mojang-api/blob/master/LICENSE) |
| [Discord.JS](https://github.com/discordjs/discord.js) | [Apache License 2.0](https://github.com/discordjs/discord.js/blob/master/LICENSE) |
| [Node Fetch](https://github.com/node-fetch/node-fetch) | [MIT](https://github.com/node-fetch/node-fetch/blob/master/LICENSE.md) |
| [Mongoose](https://github.com/Automattic/mongoose) | [MIT](https://github.com/Automattic/mongoose/blob/master/LICENSE.md) |

Many thanks to these projects for existing. Without you my project wouldn't exist.

## License

Hypixel Dungeon Bot is open-sourced software licensed under the [GNU General Public License v3.0](http://www.gnu.org/licenses/gpl.html).
