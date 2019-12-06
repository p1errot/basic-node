const fs = require('fs');
const dataString = fs.readFileSync('./data/data.json').toString();

const data = JSON.parse(dataString);
console.log(data);
const modifiedData = data.map(element => (
  {
    ...element,
    updated: new Date()
  }
));

const filename = './data/writtenFile.json';
fs.writeFileSync(filename, JSON.stringify(modifiedData, "", 2));

const fileRead = fs.readFileSync(filename).toString();
console.log(fileRead);
