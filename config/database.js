// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.bit.io'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'peoplearoundalexandre/meedibase-pql'),
      user: env('DATABASE_USERNAME', 'peoplearoundalexandre'),
      password: env('DATABASE_PASSWORD', 'v2_3xvju_vrC36LFMKTGr25jcsnvEsnb'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
