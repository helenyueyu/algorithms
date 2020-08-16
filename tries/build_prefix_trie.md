## Implementation
### Iterative
```js
class Trie {
    constructor() {
        this.h = {}; 
    }
    
    insert(word) {
        let hash = this.h; 
        let idx = 0; 
        while (idx < word.length) {
            if (hash[word[idx]] === undefined) {

                hash[word[idx]] = {}; 
            } 
            hash = hash[word[idx]]; 
            idx++; 
        }
        hash['*'] = true; 
    }
    
    search(word) {
        let hash = this.h; 
        let idx = 0; 
        while (idx < word.length) {
            if (hash[word[idx]] === undefined) {
                return false; 
            }
            hash = hash[word[idx]]; 
            idx++; 
        }
        return hash['*'] !== undefined; 
    }
    
    startsWith(prefix) {
        let hash = this.h; 
        let idx = 0; 
        while (idx < prefix.length) {
            if (hash[prefix[idx]] === undefined) {
                return false; 
            }
            hash = hash[prefix[idx]]; 
            idx++; 
        }
        return true;
    }
}
```