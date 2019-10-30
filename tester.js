let searchFunc = require("./search");

searchHelper([
    "Dog",
    "Cat",
    "Animal",
    "Person",
    "Prsn"
]);

function searchHelper(searchesArray) {
    searchesArray.forEach(word => { 
        let result = searchFunc(word, true);
        console.log(`${word}: `, result);
    });
}