const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const { prefix, botToken, mongoDBToken } = require('./config.json');
const { version } = require('./package.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

mongoose.connect(mongoDBToken, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.once('open', async () => {
  const date = new Date(new Date().setHours(new Date().getUTCHours() + 1));
  console.log(
    '> ' +
      date.toLocaleDateString('es', {
        minute: '2-digit',
        hour: '2-digit',
        day: 'numeric',
        month: '2-digit',
        year: 'numeric'
      })
  );
  console.log('> Successfully connected to the database');
});

db.on('error', (err) => {
  console.error(err);
  console.log('> Error in the connection to the database');
});

client.once('ready', () => {
  console.log(`> Logged in as ${client.user.tag}`);
  console.log("> Using Xenfo's Hypixel API Key");
  console.log('> Bot will now start responding to commands');
  client.user.setPresence({
    activity: {
      name: `${prefix}help | v${version}`,
      type: 'LISTENING'
    }
  });
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.channel.send('There was an error trying to execute that command!');
  }
});

client.login(botToken);
