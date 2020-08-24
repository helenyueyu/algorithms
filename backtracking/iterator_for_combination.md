## Implementation
```js
var CombinationIterator = function(characters, combinationLength) {
    characters = characters.split(''); 
    this.res = []; 
    function backtrack(curr, res, idx, n) {
        if (curr.length > n) return; 
        if (curr.length === n) {
            res.push(curr.slice(0)); 
        }
        for (let i = idx; i < characters.length; i++) {
            backtrack(curr.concat(characters[i]), res, i+1, n); 
        }
    }
    backtrack([], this.res, 0, combinationLength); 
    this.idx = -1; 
};


CombinationIterator.prototype.next = function() {
    this.idx++; 
    return this.res[this.idx].join(''); 
};


CombinationIterator.prototype.hasNext = function() {
    return this.res[this.idx + 1] !== undefined; 
};
```