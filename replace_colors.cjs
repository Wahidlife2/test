const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'COQUESDELUXE/src/pages');

function processDirectory(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }

        files.forEach((file, index) => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (error, stat) => {
                if (error) {
                    console.error("Error stating file.", error);
                    return;
                }

                if (stat.isFile() && filePath.endsWith('.jsx')) {
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) return console.error(err);

                        let result = data.replace(/#000137/g, '#000000');
                        result = result.replace(/Bleu Kiabi/g, 'Noir Classique');
                        result = result.replace(/Kiabi/g, 'Coques de Luxe');
                        result = result.replace(/kiabi/g, 'coquesdeluxe');
                        result = result.replace(/#E2001A/g, '#000000');
                        result = result.replace(/#D35400/g, '#000000');
                        result = result.replace(/#00025D/g, '#333333');

                        if (result !== data) {
                            fs.writeFile(filePath, result, 'utf8', (err) => {
                                if (err) return console.log(err);
                                console.log(`Updated ${file}`);
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
