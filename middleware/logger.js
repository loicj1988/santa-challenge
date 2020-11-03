const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, simple } = format;

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  defaultMeta: { service: 'santa-app' },
  transports: [
    new transports.Console({
      format: simple()}),
  ],
});

module.exports = logger;