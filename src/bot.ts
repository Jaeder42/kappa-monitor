import * as Discord from 'discord.js';
import log from './utils/log';
export default () => {
  const client = new Discord.Client();

  client.on('ready', () => {
    log.info(`Logged in as ${client.user.tag}!`);
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
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    member.addRole('380358333862772737');
  });

  client.login('NDE4Nzk1NTIwMTQ4ODk3Nzkz.DXoVUA.S6ddNsdxKTE33dpJo54rsZ08Hsk');
};