## Overview

This question has a bit of "fluff", but we can boil down the crux of the problem as simply asking us: 

* In a network of nodes in a graph, does there exist a node s.t. 
    1. There exists **N-1** incoming edges
    2. There exists **0** outgoing edges

To do this, we can create an `inCounts` and `outCounts` array, and then loop through to check if any node `i` satisfies those constraints. 


## Implementation
```js
var findJudge = function(N, trust) {
    const inCounts = new Array(N+1).fill(0); 
    const outCounts = new Array(N+1).fill(0); 
    
    // [A,B] <=> A -> B 
    for (let i = 0; i < trust.length; i++) {
        const [truster, trustee] = trust[i]; 
        inCounts[trustee]++; 
        outCounts[truster]++; 
    }
    
    for (let i = 1; i <= N; i++) {
        if (inCounts[i] === N-1 && outCounts[i] === 0) return i; 
    }
    
    return -1; 
};
```

## Complexity
Time: `O(E)`
Space: `O(N)`
