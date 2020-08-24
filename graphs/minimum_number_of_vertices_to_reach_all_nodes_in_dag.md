## Implementation
```js
var findSmallestSetOfVertices = function(n, edges) {
    const inCounts = new Array(n).fill(0); 
    
    for (let edge of edges) {
        const [n1, n2] = edge; 
        inCounts[n2]++; 
    }
    
    const res = []; 
    for (let i = 0; i < inCounts.length; i++) {
        if (inCounts[i] === 0) res.push(i); 
    }
    return res; 
};
```

## Complexity
Time: `O(E)`, where `E` is the number of edges. 
Space: `O(N)`, where `N` is the number of nodes. 