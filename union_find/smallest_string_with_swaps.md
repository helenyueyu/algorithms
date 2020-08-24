## Implementation
```js
var smallestStringWithSwaps = function(s, pairs) {
    const res = new Array(s.length); 
    const uf = new UnionFind(s.length); 
    const h = {}; 
    
    for (let i = 0; i < pairs.length; i++) {
        const [x, y] = pairs[i]; 
        uf.union(x,y); 
    }
    
    for (let i = 0; i < s.length; i++) {
        let p = uf.find(i); 
        if (h[p] === undefined) {
            h[p] = []; 
        }
        h[p].push(i); 
    }

    for (let k in h) {
        let indices = h[k]; 
        let chars = [];
        for (let index of indices) {
            chars.push(s[index]); 
        }
        chars.sort(); 
        for (let i = 0; i < chars.length; i++) {
            res[indices[i]] = chars[i]; 
        }
    }
    
    return res.join(''); 
};

class UnionFind {
    constructor(n) {
        this.arr = new Array(n); 
        for (let i = 0; i < n; i++) {
            this.arr[i] = i; 
        }
    }
    
    find(x) {
        if (this.arr[x] !== x) {
            this.arr[x] = this.find(this.arr[x]); 
        }
        return this.arr[x]; 
    }
    
    union(x,y) {
        let px = this.find(x); 
        let py = this.find(y); 
        if (px !== py) {
            this.arr[px] = py; 
        }
    }
}
```