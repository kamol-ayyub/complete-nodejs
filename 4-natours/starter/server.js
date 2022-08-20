const app = require('./app');
const dotenv = require('dotenv');
const port = 3000;
dotenv.config({
  path: './config.env',
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
