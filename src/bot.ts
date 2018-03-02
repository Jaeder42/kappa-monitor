import * as Discord from 'discord.js';
import log from './utils/log';
const { BOT_TOKEN } = process.env;
export default () => {
  const client = new Discord.Client();

  client.on('ready', () => {
    log.info(`Logged in as ${client.user.tag}!`);
  });
  client.on('message', async msg => {
    try {
      if (msg.content === 'ping') {
        await msg.reply('pong');
      }
      if (msg.content === 'PÖMPS!') {
        await msg.reply('What do you mean?!');
      }
    } catch (err) {
      log.error(err);
    }
  });

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    member.addRole('380358333862772737');
  });

  client.login(BOT_TOKEN);
};