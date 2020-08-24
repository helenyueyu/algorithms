## Implementation
```js
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    if (words1.length !== words2.length) return false; 
    const uf = new UnionFind(words1.concat(words2)); 
    for (let i = 0; i < pairs.length; i++) {
        const [w1, w2] = pairs[i]; 
        uf.union(w1, w2); 
    }
    for (let i = 0; i < words1.length; i++) {
        let p1 = uf.find(words1[i]); 
        let p2 = uf.find(words2[i]); 
        if (p1 !== p2) return false; 
    }
    return true; 
};

class UnionFind {
    constructor(words) {
        this.h = {}; 
        for (let word of words) {
            this.h[word] = word; 
        }
    }
    
    find(word) {
        if (this.h[word] !== word) {
            this.h[word] = this.find(this.h[word]); 
        }
        return this.h[word]; 
    }
    
    union(word1, word2) {
        let pWord1 = this.find(word1); 
        let pWord2 = this.find(word2); 
        if (pWord1 !== pWord2) {
            this.h[pWord1] = pWord2; 
        }
    }
}
```