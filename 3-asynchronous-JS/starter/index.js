const fs = require('fs');
const superagent = require('superagent');
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(data, 'data');

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      console.log(res.body.message);
      if (err) return console.log(err.message, 'error');

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('random dog img file saved');
      });
    });
});
