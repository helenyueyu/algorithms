## Overview
we will solve this the graph way using BFS (Kahn's algorithm)

we create an adjacency list 
we start by creating an inCount array => we push all the nodes which have an incount of 0 into the array 
    => in a binary tree, there should only be one node with 0 incoming edges, the root 
    
when we process the neighbors (outgoing edges) for a node, or the number of elements in the adjacency list for that particular element, we check that the number of those elements cannot exceed 2 (else it would fail being a binary tree)


For something like below, we also check our incounts array to make sure there aren't more than 1 incoming count 

    0 
   / \
  1   2
   \ /
    3
    

## Implementation
```js
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const inCounts = new Array(n).fill(0); 
    const adjList = new Array(n).fill().map(() => []); 
    
    for (let i = 0; i < leftChild.length; i++) {
        const [parent, left, right] = [i, leftChild[i], rightChild[i]]; 
        adjList[parent].push(left); 
        adjList[parent].push(right); 
        inCounts[left]++; 
        inCounts[right]++; 
    }
    
    for (let i = 0; i < inCounts.length; i++) {
        if (inCounts[i] > 1) return false; 
    }
    
    let visitIdx = 0; 
    const q = []; 
    for (let i = 0; i < n; i++) {
        if (inCounts[i] === 0) q.push(i); 
    }
    if (q.length !== 1) return false; 
    
    while (q.length > 0) {
        const curr = q.shift(); 
        const neighbors = adjList[curr]; 
        if (neighbors.length > 2) return false; 
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i]; 
            inCounts[neighbor]--; 
            if (inCounts[neighbor] === 0) q.push(neighbor); 
        }
        visitIdx++; 
    }
    
    return visitIdx === inCounts.length ? true : false; 
};
```