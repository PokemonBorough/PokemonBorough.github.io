const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content === '!hello') {
    message.channel.send('Hello from my Discord bot!');
  }
});

client.login('MTEyMTI0NDYxODI2NTE5ODY0Mg.GRzYGe.K_okyTDTO-4c6J7hjdaSsEI2K9Ty180GYZ2Ye8');
