const fs = require('fs');
setTimeout(() => {
  console.log('bla');
}, 0);
setImmediate(() => {
  console.log('immediate');
});

fs.readFile('test-file.txt', () => {
  console.log('IO finished');
  setTimeout(() => {
    console.log('bla  in FS');
  }, 0);
  setTimeout(() => {
    console.log('bla  2 in FS');
  }, 3000);
  setImmediate(() => {
    console.log('immediate  in FS');
  });
});

console.log('hello from top level code');
