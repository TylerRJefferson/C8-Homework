const fs = require('fs')
const text = fs.readFileSync('ReadMe.txt' , 'utf8')
console.log(text)