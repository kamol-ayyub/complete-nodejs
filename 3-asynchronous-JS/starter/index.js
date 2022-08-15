const fs = require('fs');
const superagent = require('superagent');
const readFilePro = (file) => {
  return new Promise((res, rej) => {
    if (err) reject(' i couldnt not find');
    fs.readFile(file),
      (err, data) => {
        res(data);
      };
  });
};
//
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(data, 'data');

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      if (err) return console.log(err.message, 'error');

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('random dog img file saved');
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
