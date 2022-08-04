const fs = require('fs');
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOut = `this is what we now about avokado:  ${textIn} \n Created on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);

// asynchronus way

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);
      fs.writeFile('./txt/final.txt', `${data2}\n ${data3}`, 'utf-8', (err) => {
        console.log('your file has been written!');
      });
    });
  });
});
