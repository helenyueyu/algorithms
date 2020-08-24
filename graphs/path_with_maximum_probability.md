## Implementation
```js
var maxProbability = function(n, edges, succProb, start, end) {
    const probs = new Array(n).fill(0); 
    const adjList = {}; 
    
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        
        if (adjList[n1] === undefined) adjList[n1] = []; 
        if (adjList[n2] === undefined) adjList[n2] = []; 
        
        adjList[n1].push([n2, succProb[i]]); 
        adjList[n2].push([n1, succProb[i]]); 
    }
    
    const q = [[start, 1]]; 
    
    while (q.length > 0) {
        const [node, prob] = q.shift(); 
        if (adjList[node] === undefined) adjList[node] = []; 
        for (const [neighbor, p] of adjList[node]) {
            if (probs[neighbor] >= p * prob) continue; 
            q.push([neighbor, p*prob]); 
            probs[neighbor] = p*prob; 
        }
    }
    
    return probs[end]; 
};
```

## Complexity
Time: `O(E)`
Space: `O(N)`