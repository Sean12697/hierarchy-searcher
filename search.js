module.exports = (word, onlyEndWord) => {
    let file = require("./output/compressedOntology.json");
    let { uuids, list } = file;
    // Ensuring in same case
    uuids = uuids.map(w => w.toLowerCase());
    word = word.toLowerCase();
    // Getting index
    let index = uuids.findIndex(w => w == word);
    if (index == -1) return [];
    // If found
    let foundIn = [];
    list.forEach(pairing => {
        if (onlyEndWord ? pairing[0] == index : pairing.includes(index)) {
            foundIn.push(pairing.map(wordIndex => uuids[wordIndex]));
        }
    }); // Finishing
    return foundIn;
}