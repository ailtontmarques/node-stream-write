const line = '0000000 1111111 2222222 3333333 4444444 55555555555555555 6666666' + '\n';

const contentFile = {
    
    generateFile(counter) {
        let lineFeed = '';

        for (let i = 0; i < counter; i++) {
            lineFeed += line;
        }

        return lineFeed;
    }
}

module.exports = contentFile
