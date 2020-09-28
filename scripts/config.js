const fs = require('fs');

fs.readFile('config.json', (err) => {
  if (err) {
    let config = {
      prefix: '-',
      mongoDBToken: 'MongoDB Connect URL',
      hypixelToken: 'Hypixel API Key',
      botToken: 'Token for your bot from Discord Developer Portal'
    };

    let data = JSON.stringify(config, null, 2);

    fs.writeFileSync('config.json', data);
    return console.log(
      '> Created config.json. Please fill in your details there.'
    );
  }
  return console.log('> Why are you running this. Your config already exists!');
});
