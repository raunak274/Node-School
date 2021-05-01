'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
        // console.log('file', file, 'ext', ext, 'folder', folder);
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})