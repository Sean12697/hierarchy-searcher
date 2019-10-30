# Hierarchy Searcher

A simple npm script to search through Googles 600 box hierarchy.

## Example

```js
const hierarchySearcher = require("hierarchy-searcher");

let word = "Dog";
let result = hierarchySearcher(word, true);
console.log(`${word}: `, result);
```

Which returns:

```
Dog:  [ [ 'dog', 'carnivore', 'mammal', 'animal', 'entity' ] ]
```