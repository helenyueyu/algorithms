```js
function countComponents(n, edges) {
    let count = 0; 
    const visited = new Set(); 

    const adjList = new Array(n).fill().map(() => []); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }

    for (let i = 0; i < n; i++) {
        if (visited.has(i)) continue; 
        dfs(i, adjList, visited); 
        count++; 
    }
    return count; 
}

function dfs(i, adjList, visited) {
    visited.add(i); 
    const children = adjList[i]; 
    for (let i = 0; i < children.length; i++) {
        const neighbor = children[i]; 
        if (visited.has(neighbor)) continue; 
        dfs(neighbor, adjList, visited); 
    }
}
```