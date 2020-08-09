## Implementation
### DFS
```js

function dfs(adjList, visited, city, destination) {
    if (adjList[city].length === 0) return city === destination;if (visited[city] !== -1) return visited[city]; 
    visited[city] = 0; 
    const neighbors = adjList[city]; 
    for (let i = 0; i < neighbors.length; i++) {
        if (!dfs(adjList, visited, neighbors[i], destination)) return false; 
    }
    return visited[city] = true; 
}
function leadsToDestination(n, edges, source, destination) {
    const adjList = new Array(n).fill().map(() => []); 
    const visited = new Array(n).fill(-1); 
    for (let i = 0; i < edges.length; i++) {
        const [from, to] = edges[i]; 
        adjList[from].push(to); 
    }
    return dfs(adjList, visited, source, destination); 
}

```

### BFS
```js
var leadsToDestination = function(n, edges, source, destination) {
    const visited = new Set(); 
    const outCount = new Array(n).fill(0); 
    const adjList = new Array(n).fill().map(() => []); 
    
    for (let i = 0; i < edges.length; i++) {
        const [from, to] = edges[i]; 
        adjList[from].push(to); 
        outCount[from]++; 
    }

    let count = 0; 
    let q = [source];  
    while (q.length > 0) {
        const curr = q.shift(); 
        if (visited.has(curr)) continue; 
        visited.add(curr); 
        if (curr === destination) count++; 
        const neighbors = adjList[curr]; 
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (visited.has(neighbor)) return false; 
            if (outCount[neighbor] === 0 && neighbor !== destination) return false; 
            q.push(neighbor); 
        }
        outCount[curr] = 0; 
        
    }
    
    return count > 0;  
};
```