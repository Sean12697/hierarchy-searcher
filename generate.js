const fs = require("fs"), beautify = require('beautify'), parse = require("./scripts/parseWords"), recursive = require("./scripts/recursiveCreator");

async function run() {
    return new Promise(async (resolve) => {
        let parsed = await parse(`${__dirname}/input`);
        let recursiveJson = recursive(parsed);
        fs.writeFileSync("./output/results.json", beautify(JSON.stringify(parsed), { format: 'json' }));
        fs.writeFileSync("./output/compressedOntology.json", beautify(JSON.stringify(recursiveJson), { format: 'json' }));
        resolve(recursiveJson);
    });
}

// module.exports = async () => {
//     return new Promise(resolve => {
//         run().then(result => {
//             resolve(result);
//         });
//     });
// };

run().then(console.log);