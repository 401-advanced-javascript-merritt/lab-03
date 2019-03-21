![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 03

### Chris Merritt

### Links and Resources
* [repo](https://github.com/401-advanced-javascript-merritt/lab-03)
* [travis]()

#### Documentation
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `edit-file.js`
Reads from a file specified from the user's input to the command line. Replaces the content with a random number, then logs the output.

#### `reader-fixed.js`
Reads from three files specified from user input, then reads them in order and adds the content to an array.

#### `reader-promises.js`
Reads from three files specified from user input, then reads them in order and adds the content to an array. Uses promises.


##### Exported Values and Methods

###### `edit-file files/test.txt -> '0.389043890'` (a random number)
node edit-file.js files/test.txt

###### `readAll(paths, callback) -> [File 1, File 2, File 3]`
node index.js files/1.txt files/2.txt files/3.txt


### Setup

#### Running the app
* `node index.js filepath/1 filepath/2 filepath /3`
   *Logs the contents of the three files in order.
* `edit-file files/test.txt`
  *  Writes a random number on the text file and logs the result..
  
#### Tests
* How do you run tests?
npm test
* What assertions were made?
Should return an array.
* What assertions need to be / should be made?
A bad file would throw an error
Fewer than three files would throw an error.

#### UML
[UML](lab3uml.jpg)
