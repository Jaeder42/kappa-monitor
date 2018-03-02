import * as restify from 'restify';
import log from './utils/log';
import bot from './bot';
const { PORT } = process.env;

const server = restify.createServer({});
server.get('/alive', (req, res, next) => {
  return res.json({ alive: true });
});
bot();
log.info(`Server starting on port ${PORT}`)
server.listen(PORT);
