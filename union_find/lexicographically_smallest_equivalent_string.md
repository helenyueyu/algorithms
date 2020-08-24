## Implementation
```js
var smallestEquivalentString = function(A, B, S) {
    const uf = new UnionFind(); 
    for (let i = 0; i < A.length; i++) {
        uf.union(A[i], B[i]); 
    }
    let res = ""; 
    
    for (let i = 0; i < S.length; i++) {
        let c = uf.find(S[i]); 
        res += c; 
    }
    
    return res; 
};

class UnionFind {
    constructor() {
        this.h = {}; 
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
        for (let char of alphabet) {
            this.h[char] = char; 
        }
    }
    
    find(x) {
        if (this.h[x] !== x) {
            this.h[x] = this.find(this.h[x]); 
        }
        return this.h[x]; 
    }
    
    union(x,y) {
        let px = this.find(x); 
        let py = this.find(y); 
        
        if (px.charCodeAt(0) < py.charCodeAt(0)) {
            this.h[py] = px; 
        } else {
            this.h[px] = py; 
        }
    }
}
```

## Complexity
Time: `O(n)`
Space: `O(1)`
