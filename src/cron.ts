// Hacky workaround for Heroku idling free apps.
import axios from 'axios';
import * as cron from 'node-cron';
import log from './utils/log';
export default () => {
  const cronJob = cron.schedule('0 */15 * * * *', async () => {
    await axios.get('https://kappa-blyat-bot.herokuapp.com/alive');
    log.info('Ping myself! :D')
  }, null, true);
}