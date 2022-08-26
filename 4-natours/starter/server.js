const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config({
  path: './config.env',
});
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('uncaught exception shutting down');
  console.log(err);
  process.exit(1);
});
const DB = process.env.DATABASE.replace(
  `<PASSWORD>`,
  process.env.DATABASE_PASSWORD
);
mongoose
  //for local databases
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connecion successfull');
  });

// schema

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
process.on('unhandledRejection', (err) => {
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
