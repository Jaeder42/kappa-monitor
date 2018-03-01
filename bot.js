const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  if (msg.content === 'PÖMPS!') {
    msg.reply('What do you mean?!');
  }

});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  var channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  msg.member.addRole('380358333862772737');
  channel.send(`Welcome to the server, ${member}`);
});

client.login('NDE4Nzk1NTIwMTQ4ODk3Nzkz.DXoVUA.S6ddNsdxKTE33dpJo54rsZ08Hsk');