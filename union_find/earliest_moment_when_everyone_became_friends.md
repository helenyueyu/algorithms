```js
var earliestAcq = function(logs, N) {
    const uf = new UnionFind(N); 
    
    logs.sort((a,b) => a[0] - b[0]); 
    for (let log of logs) {
        const [timestamp, f1, f2] = log; 
        uf.union(f1, f2); 

        if (uf.size === 1) return timestamp;
    }
    return -1; 
};

class UnionFind {
    constructor(n) {
        this.arr = new Array(n); 
        for (let i = 0; i < n; i++) {
            this.arr[i] = i; 
        }
        this.size = n; 
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
            this.size--;  
        }
    }
}
```
Time: `O(n)`
Space: `O(n)`
