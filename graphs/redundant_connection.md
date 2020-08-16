## Overview
We use the **union find** data structure to help us solve this problem. 


## Implementation
```js
var findRedundantConnection = function(edges) {
    const uf = new UnionFind(edges.length); 
    
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        if (uf.find(n1) === uf.find(n2)) return edges[i]; 
        uf.union(n1, n2); 
    }
};


class UnionFind {
    constructor(n) {
        this.p = new Array(n); 
        for (let i = 0; i < n; i++) this.p[i] = i; 
    }

    find(idx) {
        if (this.p[idx] !== idx) {
            this.p[idx] = this.find(this.p[idx]); 
        } 
        return this.p[idx];  
    }

    union(i, j) {
        const pi = this.find(i); 
        const pj = this.find(j); 
        if (pi !== pj) { this.p[pi] = pj; }
    }
}
```