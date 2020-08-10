## Overview
Go back and resolve. 

## Implementation

```js
var cloneGraph = function(node) {
    const h = {}; 
    return clone(node, h); 
};

function clone(node, h) {
    if (!node) return null; 
    if (h[node.val] !== undefined) return h[node.val]; 
    const clonedNode = new Node(node.val);

    h[clonedNode.val] = clonedNode; 

    for (let i = 0; i < node.neighbors.length; i++) {
        clonedNode.neighbors.push(clone(node.neighbors[i], h)); 
    }
    return clonedNode; 
}
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