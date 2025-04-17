const fs = require('fs');
const files = fs.readdirSync(__dirname);
const filesWithExtension = files.filter(file => file.endsWith('.js'));

filesWithExtension.forEach(f => console.log(f));

console.log('=========================');