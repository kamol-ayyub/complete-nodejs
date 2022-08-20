const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config({
  path: './config.env',
});
const app = require('./app');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
