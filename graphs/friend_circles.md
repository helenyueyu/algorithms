## Revisit with Union Find 

## Implementation
```js
var findCircleNum = function(M) {
    const N = M.length; 
    
    let count = 0; 
    let visited = new Set(); 
    
    for (let i = 0; i < N; i++) {
        if (!visited.has(i)) {
            dfs(i, M, visited); 
            count++; 
        }
    }
    return count; 
};

function dfs(i, M, visited) {
    if (visited.has(i)) return; 
    visited.add(i); 
    let row = M[i]; 
    for (let j = 0; j < row.length; j++) {
        if (row[j] === 1) {
            dfs(j, M, visited); 
        }
    }
}
```