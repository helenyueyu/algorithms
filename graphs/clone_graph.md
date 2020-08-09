## Overview
Go back and resolve. 

## Implementation
```js
var cloneGraph = function(node) {
    const visited = {};
    
    function dfs(node) {
        if (!node) return node; 
        if (!visited[node.val]) {
            visited[node.val] = new Node(node.val); 
            visited[node.val].neighbors = node.neighbors.map(dfs); 
        }
        return visited[node.val]; 
    }
    return dfs(node); 
};
```

```js
// why doesn't this work???
var cloneGraph = function(node) {
    const visited = new Set(); 
    function recursion(node, visited) {
        let copiedNode = new Node(node, []);
        visited.add(node.val); 
        for (let i = 0; i < node.neighbors.length; i++) {
            const neighbor = new Node(node.neighbors[i].val); 
            if (!visited.has(neighbor.val)) {
                copiedNode.neighbors.push(recursion(neighbor, visited)); 
            }
        }
        return copiedNode; 
    }
    return recursion(node, visited); 
};

```