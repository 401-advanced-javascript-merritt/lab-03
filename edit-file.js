'use strict';

let fs = require('fs');

let file = process.argv[2];
/**
 * Module reads a file, then replaces the value with a random number.
 * @param filepath
 * @returns rewritten page.
 */


fs.readFile(file, (err, data) => {
  if( err ){ console.error(err); return; }
  console.log('Before: ', data.toString());
  let contents = Math.random().toString();

  fs.writeFile(file, Buffer.from(contents), (err, data) => {
    if ( err ) { console.error(err); return; }
    fs.readFile(file, (err, data) => {
      if ( err ){ console.error(err); return;}
      console.log('After: ', data.toString());
    });
  });
});
