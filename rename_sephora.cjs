const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'SEPHORA/src');

function processDirectory(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) return console.error("Could not list the directory.", err);

        files.forEach((file) => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (error, stat) => {
                if (error) return console.error("Error stating file.", error);

                if (stat.isFile() && (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.html'))) {
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) return console.error(err);

                        let result = data.replace(/KIABI/g, 'SEPHORA');
                        result = result.replace(/kiabi/g, 'sephora');

                        if (result !== data) {
                            fs.writeFile(filePath, result, 'utf8', (err) => {
                                if (err) return console.log(err);
                            });
                        }
                    });
                } else if (stat.isDirectory()) {
                    processDirectory(filePath);
                }
            });
        });
    });
}

processDirectory(directoryPath);

const indexHtmlPath = path.join(__dirname, 'SEPHORA/index.html');
fs.readFile(indexHtmlPath, 'utf8', (err, data) => {
    if (err) return;
    let result = data.replace(/KIABI/g, 'SEPHORA').replace(/kiabi/g, 'sephora');
    fs.writeFile(indexHtmlPath, result, 'utf8', () => { });
});
