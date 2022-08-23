const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const app = require('./app');
dotenv.config({
  path: './config.env',
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
