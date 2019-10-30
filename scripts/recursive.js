let fs = require("fs"), ontologyRoot = require("./result.json"), list = [];

recursive(ontologyRoot, "");
fs.writeFileSync("list.txt", list.join("\n"));

function recursive(root, predecessor) {
    Object.keys(root).forEach(key => {
        if (key == "LabelName") {
            predecessor = `${root[key]}${predecessor == "" ? "" : " -> " + predecessor}`;
            list.push(predecessor);
        } else root[key].forEach(item => recursive(item, predecessor));
    });
}