async function run(toInputs) {
    const fs = require("fs"), json = require(`${toInputs}/bbox_labels_600_hierarchy.json`);
    let replaceAll = (string, search, replacement) => string.split(search).join(replacement);


    return new Promise(resolve => {
        let jsonTemp = JSON.stringify(json), lineReader = require('readline').createInterface({
            input: fs.createReadStream(`${toInputs}/class-descriptions-boxable.csv`)
        });
          
        lineReader.on('line', line => {
            let word = line.split(",");
            jsonTemp = replaceAll(jsonTemp, word[0], word[1]);
        });
        
        lineReader.on('close', () => {
            resolve(JSON.parse(jsonTemp));
            // console.log("Replaced: ", JSON.parse(jsonTemp));
            // fs.writeFileSync("./result.json", beautify(jsonTemp, { format: 'json' }));
        });
    });
}

module.exports = async (toInputs) => {
    return new Promise(resolve => {
        run(toInputs).then(result => {
            resolve(result);
        });
    });
};