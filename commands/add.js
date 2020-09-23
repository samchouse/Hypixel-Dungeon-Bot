const fetch = require('node-fetch');

module.exports = {
  name: 'add',
  aliases: ['a'],
  args: true,
  usage: '<username>',
  async execute(message, args) {
    let msgID;
    await message.channel
      .send(`Validating ${args[0]} and adding them to the team.`)
      .then((msg) => (msgID = msg.id));

    fetch(`https://api.ashcon.app/mojang/v2/user/${args[0]}`)
      .then((res) => res.json)
      .then(async (json) => {
        if (!json.username) {
          setTimeout(async function edit() {
            await message.channel.messages.cache
              .get(msgID)
              .edit(
                `${args[0]} does not exist. Please check that you entered the right username.`
              );
          }, 3000);
        }
      });
  }
};
