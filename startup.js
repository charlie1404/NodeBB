/* eslint-disable */

const fs = require('fs');

fs.writeFileSync(
  './config.json',
  JSON.stringify(
    {
      url: 'https://forum.theagora.co.in',
      secret: process.env.BB_SECRET,
      database: 'mongo',
      mongo: {
        uri: process.env.MONGO_URL,
      },
      port: process.env.PORT,
    },
    null,
    2,
  ),
);
