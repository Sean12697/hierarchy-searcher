let list = [], uuids = [];

function recursive(root, predecessor) {
    Object.keys(root).forEach(key => {
        if (key == "LabelName") {
            predecessor = [].concat.apply([getOrCreateIndex(root[key])], predecessor);
            list.push(predecessor);
        } else root[key].forEach(item => recursive(item, predecessor));
    });
}

function getOrCreateIndex(word) {
    let index = uuids.findIndex(w => w == word);
    if (index == -1) uuids.push(word);
    return (index == -1) ? uuids.length - 1 : index;
}

module.exports = (rootObj) => {
    recursive(rootObj, []);
    return { uuids, list };
}