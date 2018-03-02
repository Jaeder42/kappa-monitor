import log from '../../utils/log';
const message = async (msg) => {
  const mentions = Array.from(msg.mentions.members);
  try {
    if (mentions) {
      mentions.forEach(async (mention: any) => {
        const user = mention[1].user;
        if (user.username === 'KappaMonitor' && user.discriminator === '9633') {
          if (msg.content === 'ping') {
            await msg.reply('pong');
          }
          else if (msg.content === 'PÖMPS!') {
            await msg.reply('What do you mean?!');
          } else if (msg.content === 'help') {
            await msg.reply('no help here min vännen');
          } else {
            await msg.reply('It me!');
          }
        }
      });
    }

  } catch (err) {
    log.error(err);
  }
}

export default message;