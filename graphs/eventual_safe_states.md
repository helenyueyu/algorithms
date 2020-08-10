## Implementation 
```js
function eventualSafeNodes(graph) {
    const outCount = new Array(graph.length).fill(0); 

    const adjList = new Array(graph.length).fill().map(() => []); 

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            adjList[graph[i][j]].push(i); 
        }
        outCount[i] = graph[i].length; 
    }

    const res = []; 
    const q = []; 

    for (let i = 0; i < outCount.length; i++) {
        if (outCount[i] === 0) q.push(i); 
    }

    while (q.length > 0) {
        const curr = q.shift(); 
        res.push(curr); 
        let neighbors = adjList[curr]; 
        neighbors.forEach(neighbor => {
            outCount[neighbor]--; 
            if (outCount[neighbor] === 0) q.push(neighbor); 
        })
    }

    return res.sort((a,b) => a < b ? -1 : 1); 
}

```