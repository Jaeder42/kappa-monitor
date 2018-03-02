// Hacky workaround for Heroku idling free apps.

import * as cron from 'node-cron';
export default (cb) => {

  const cronJob = cron.schedule('0 */10 * * * *', () => {
    cb();
  }, null, true);
}