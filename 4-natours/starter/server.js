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
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('DB connecion successfull');
  });

const tourSchema = new mongoose.Schema({});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
