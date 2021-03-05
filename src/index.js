const fs = require('fs');
const contentFile = require('./contentFile');

const path = require('path');
const { default: ContentFile } = require('./contentFile');
const dirPath = path.join(__dirname, '/files/');

const fileName = `${dirPath}generateFile.txt`;
const generatedFields = contentFile.generateFile(10)

if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

fs.writeFile(fileName, generatedFields, (err) => {
    if (err) throw err;
    // successful
    console.log(`${fileName} saved!`);
});