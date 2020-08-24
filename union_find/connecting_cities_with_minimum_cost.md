## Overview
1. Sort the edges in ascending order by cost. 
2. If two cities are not connected, connect them. 
3. Repeat until **minimum spanning tree** is formed (or in the case of a union find - there is exactly one connected component). 

Note: 

A **minimum spanning tree** is a spanning tree with the smallest weight. 

## Implementation
```js
var minimumCost = function(N, connections) {
    let totalCost = 0; 
    const uf = new UnionFind(N); 
    
    connections.sort((a,b) => a[2] - b[2]); 
    
    for (let connection of connections) {
        const [city1, city2, cost] = connection; 
        let p1 = uf.find(city1); 
        let p2 = uf.find(city2); 
        if (p1 !== p2) {
            totalCost += cost; 
            uf.union(city1, city2); 
        }
    }
    
    return uf.size === 1 ? totalCost : -1; 
};

class UnionFind {
    constructor(N) {
        this.arr = new Array(N); 
        for (let i = 0; i < N; i++) {
            this.arr[i] = i; 
        }
        this.size = N; 
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

## Complexity
