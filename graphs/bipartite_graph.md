A **bipartite graph** can only have an **even edge length cycle**. 

1. Make an adjacency list. 
2. Check if there are no **odd length** cycles in our graph. 

Alternative approach: **graph coloring**. 

Idea: We pick a node, give it a color. We **color all adjacent nodes the opposite color**. Every step of the way, we check if any of our neighbors have the same color as the current node we're at - if they do, then we know the graph cannot be bipartite.  

### BFS Approach
In our **BFS** approach, we use a queue to process nodes. But since a graph might have multiple connected components, we should loop over each value from `1...N`. 

## Implementation
```js
function possibleBipartition(N, dislikes) {
    const colors = new Array(N+1).fill(-1); 
    const explored = new Array(N+1).fill(false); 

    const adjList = new Array(N+1).fill().map(() => []); 
    for (let i = 0; i < dislikes.length; i++) {
        const [n1, n2] = dislikes[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }

    const q = []; 

    for (let i = 0; i <= N; i++) {
        if (!explored[i]) {
            colors[i] = 0; 
            q.push(i); 

            while (q.length > 0) {
                const curr = q.shift(); 
                if (explored[curr]) continue; 
                explored[curr] = true; 

                const neighbors = adjList[curr]; 
                for (let i = 0; i < neighbors.length; i++) {
                    if (colors[curr] === colors[neighbors[i]]) return false; 
                    if (colors[curr] === 0) {
                        colors[neighbors[i]] = 1; 
                    } else {
                        colors[neighbors[i]] = 0; 
                    }
                    q.push(neighbors[i]); 
                }
            }
        }
    }

    return true; 
}

```