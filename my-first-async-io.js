'use strict'

const fs = require( 'fs' );

var number;
var file;

function addOneNumber(addNumber) {
    fs.readFile(process.argv[2], function done( err, file) {
        if(err){
            console.log(err);
        }
        number = file.toString().split('\n').length - 1
        addNumber()
    })
}

addOneNumber(addNumber);

function addNumber() {
    console.log(number);
}


// 'use strict'
//     const fs = require('fs')
//     const file = process.argv[2]
    
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       const lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
