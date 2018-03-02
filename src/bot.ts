import * as Discord from 'discord.js';
import log from './utils/log';
import cron from './cron';
import * as handlers from './handlers';
const { BOT_TOKEN } = process.env;
export default () => {
  const client = new Discord.Client();

  client.on('ready', () => {
    log.info(`Logged in as ${client.user.tag}!`);
    cron();
  });
  client.on('message', async msg => {
    handlers.message(msg);
  });

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    member.addRole('380358333862772737');
  });

  client.login(BOT_TOKEN);
};