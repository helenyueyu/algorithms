```js
// union find approach
function countComponents(n, edges) {
    const uf = new UnionFind(n); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        uf.union(n1, n2); 
    }
    
    return uf.size; 
}

class UnionFind {
    constructor(n) {
        this.arr = new Array(n); 
        for (let i = 0; i < this.arr.length; i++) {
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
    
    union(x, y) {
        let px = this.find(x); 
        let py = this.find(y); 
        
        if (px !== py) {
            this.arr[px] = py; 
            this.size--; 
        }
    }
}

```

```js
// dfs approach 
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