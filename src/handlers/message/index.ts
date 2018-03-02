import log from '../../utils/log';
const message = async (msg) => {
  const mentions = Array.from(msg.mentions.members);
  try {
    if (mentions) {
      mentions.forEach(async (mention: any) => {
        const user = mention[1].user;
        if (user.username === 'KappaMonitor' && user.discriminator === '9633') {
          await msg.reply('It me!');
        }
      });
    }
    if (msg.content === 'ping') {
      await msg.reply('pong');
    }
    if (msg.content === 'PÖMPS!') {
      await msg.reply('What do you mean?!');
    }
  } catch (err) {
    log.error(err);
  }
}

export default message;