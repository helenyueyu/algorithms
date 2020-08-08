Fact: It is **very important** to be good at graph theory in order to pass interviews at a top tech company. 

# Approach 1: Basic Graph Traversal 

A graph `G` **is a tree ifff**: 

1. `G` is fully connected. 
2. `G` contains no cycles. 

We can use **DFS** to check for both of these conditions. 

1. `G` is fully connected if we start a DFS from a single source and discover **all** nodes in `G` from it. 
2. `G` contains no cycles **iff** the **DFS** never goes back to an already discovered node. 

The way the **edges** are presented to us doesn't allow us to immediately get the neighbors of a node, so the first step is to convert 

Brief digression: why do we use an **adjacency list** and not some other graph representation? 
    * An **adjacency matrix** is typically used if we have reason to believe that **the number of edges is substantially higher than the number of nodes**
    * A **linked representation**, where you actually create graph nodes, would overcomplicate the problem. 

Code for DFS step: 

```js
const stack = []; 
const visited = new Set(); 

stack.push(0); 
visited.add(0); 

while (stack.length > 0) {
    let node = stack.pop(); 
    let children = adjList[node]; 
    for (let i = 0; i < children.length; i++) {
        if (visited.has(children[i])) continue; 
        stack.push(children[i]); 
        visited.add(children[i]); 
    }
}

```

Note that there is a tricky thing with detecting cycles in an **undirected graph**, since if two nodes `A` and `B` are connected, we have the "trivial cycle" `A -> B -> A`. We should try to go along each **edge** once (only utilize one direction). One strategy is to modify our adjacency list itself. When we process `A -> B`, we should look up `B` in our adjacency list and remove `A`. 

The other approach to take is instead of using a **seen hash set**, we can use a **seen hash map**. 

```js
var validTree = function(n, edges) {
    if (edges.length !== n-1) return false; 

    const adjList = new Array(n).fill().map(() => []); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }
    const parent = {0: -1}; 
    const stack = [0]; 
        
    while (stack.length > 0) {
        const node = stack.pop(); 
        const children = adjList[node]; 
        for (let i = 0; i < children.length; i++) {
            let neighbor = children[i]; 
            if (parent[node] === neighbor) continue; 
            if (parent[neighbor] !== undefined) return false;  
            stack.push(neighbor); 
            parent[neighbor] = node; 
        }
    }
    return Object.keys(parent).length === n ? true : false; 
};
```

We can do **BFS** instead of **DFS**: 

```js
var validTree = function(n, edges) {
    if (edges.length !== n-1) return false; 

    const adjList = new Array(n).fill().map(() => []); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }
    const parent = {0: -1}; 
    const q = [0]; 

    while (q.length > 0) {
        const node = q.shift(); 
        const children = adjList[node]; 
        for (let i = 0; i < children.length; i++) {
            let neighbor = children[i]; 
            if (parent[node] === neighbor) continue; 
            if (parent[neighbor] !== undefined) return false; 
            q.push(neighbor); 
            parent[neighbor] = node; 
        }
    }

    return Object.keys(parent).length === n ? true : false; 
};
```

Alternatively, we could just simply use recursion. 

```js
var validTree = function(n, edges) {
    if (edges.length != n-1) return false; 

    const visited = new Set(); 
    const adjList = new Array(n).fill().map(() => []); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }
   
    return dfs(0, -1, adjList) && visited.size === n; 
};

function dfs(node, parent, adjList) {
    if (visited.has(node)) return false; 
    visited.add(node); 
    const children = adjList[node]; 
    for (let i = 0; i < children.length; i++) {
        let neighbor = children[i]; 
        let result = dfs(neighbor, node, adjList); 
        if (!result) return false; 
    }
    return true; 
}
```

## Complexity

### Time Complexity 
The time complexity for all of the above approaches is `O(N + E)`, where `N` is the number of nodes and `E` is the number of edges. 

Let's analyze this more specifically: 

1. Initializing an adjacency list of size `N` slots is time complexity `O(N)`. 
2. Tracking over an inserting `E` edges with time cost `O(E)`. 
3. Total cost so far is `O(N + E)`. 
4. For each node, all the edges are iterated over once. Total time complexity is `O(N + E)` (not entirely sure about this part). 

### Space Complexity
The adjacency list is a list of length `N`, with the length of each sublist summing up to `E`. This gives us a total of `O(N + E)` space (why?). 

In the worst case, the stack or the queue will have `N` nodes, giving us `O(N)` space. 
Total space complexity is `O(N + E)`. 




# Approach 2 : A Greater Delve Into Graph Theory 
In order for a graph to be a valid tree, **it must have exactly** `n0` edges. 

1. Any less, and it can't be fully connected. 
2. Any more, and it **has** to contain cycles. 

So based on this, we need to check two things: 

1. Check whether or not there are `n-1` edges, if not return `false`. 
2. Check whether the graph is **fully connected**. Return `false` if not. 

Note that checking if a graph is fully connected is straightforward: 

* check if all nodes are reachable from a search starting at a single node 

Like with the first approach, we can check for connectivity using 1 of 3 approaches: 

1. iterative DFS
2. recursive DFS
3. iterative BFS


### Iterative DFS
```js
var validTree = function(n, edges) {
    if (edges.length != n-1) return false; 

    const adjList = new Array(n).fill().map(() => []); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }
   
    const visited = new Set([0]); 
    const stack = [0]
    
    while (stack.length > 0) {
        const node = stack.pop(); 
        const children = adjList[node]; 
        for (let i = 0; i < children.length; i++) {
            const neighbor = children[i]; 
            if (visited.has(neighbor)) continue; 
            visited.add(neighbor); 
            stack.push(neighbor); 
        }
    }
    
    return visited.size === n; 
};
```


### Recursive DFS 
```js
var validTree = function(n, edges) {
    if (edges.length != n-1) return false; 

    const adjList = new Array(n).fill().map(() => []); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }
   
    const visited = new Set([0]); 
    
    dfs(0, adjList, visited); 
    
    return visited.size === n; 
};

function dfs(node, adjList, visited) {
    visited.add(node); 
    const children = adjList[node]; 
    for (let i = 0; i < children.length; i++) {
        const neighbor = children[i]; 
        if (visited.has(neighbor)) continue; 
        dfs(neighbor, adjList, visited); 
    }
}
```


### Iterative BFS
```js
var validTree = function(n, edges) {
    if (edges.length !== n-1) return false; 

    const adjList = new Array(n).fill().map(() => []); 
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i]; 
        adjList[n1].push(n2); 
        adjList[n2].push(n1); 
    }

    const visited = new Set(); 
    const q = [0]; 
    while (q.length > 0) {
        const curr = q.shift(); 

    }
}

```


