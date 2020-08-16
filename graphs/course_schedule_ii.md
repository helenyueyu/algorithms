## Overview

**DAG (Directed Acyclic Graph)**: a **directed** graph with **no** cycles. A few points: 

1. A graph must be a **DAG** in order for a topological sort to be found. 
2. A **DAG** must always have at least one node with an **in degree of 0**, and another node with an **out degree of 0**. 
3. The longest path between two nodes in a **DAG** is always finite. 

Topological sort is **only** possible if your graph is a **DAG**. 

**Topological sort**: It is a linear ordering of vertices s.t. for every directed edge `UV`, `U` comes before `V` in the ordering. 

Note: In a **topological sort**, the vertices that come first are the ones with `0` **in degree** edges. The vertices that come last are the ones with `0` **out degree** edges. 

For a given graph, there can multiple valid **toplogical sorts**. 

`O(V + E)`. 


## BFS Approach (Kahn's algorithm)

General idea: 

* Create an array of incounts. Each element in incounts represents, for element `i`, **the number of incoming edges to that node**. 
* Set up our adjacency list. For each node, the children of that node is going to represent **all of the nodes** connected to that node **through outgoing edges**. 
* We set up both the **incounts array** and the **adjacency list** when we initialize the graph. 
* When we keep removing nodes with 0 incoming edges in this manner, **if this graph has 0 cycles**, then we should eventually remove every single node in our graph. 
    * If there exists a cycle, then we will **never** be able to remove any node that exists in this cycle. 

    
```js
function findOrder(numCourses, prereqs) {
    const inCounts = new Array(numCourses).fill(0); 
    const adjList = new Array(numCourses).fill().map(() => []); 
    initializeGraph(inCounts, adjList, prereqs); 
    return solveByBFS(inCounts, adjList); 
}

function initializeGraph(inCounts, adjList, prereqs) {
    for (let i = 0; i < prereqs.length; i++) {
        const [course, prereq] = prereqs[i]; 
        inCounts[course]++; 
        adjList[prereq].push(course); // outgoing edges 
    }
}

function solveByBFS(inCounts, adjList) {
    const res = new Array(inCounts.length); 
    const q = []; 
    for (let i = 0; i < inCounts.length; i++) {
        if (inCounts[i] === 0) q.push(i); 
    } 
    let visitIdx = 0; 
    while (q.length > 0) {
        let prereq = q.shift(); 
        res[visitIdx] = prereq;  
        const children = adjList[prereq]; 
        for (let i = 0; i < children.length; i++) {
            inCounts[children[i]]--; 
            if (inCounts[children[i]] === 0) q.push(children[i]); 
        }
        visitIdx++; 
    }

    return visitIdx === inCounts.length ? res : []; 
}
```


## DFS Approach (Confusing)
```js
function findOrder(numCourses, prereqs) {
    const inCounts = new Array(numCourses).fill(0); 
    const adjList = new Array(numCourses).fill().map(() => []); 
    initializeGraph(inCounts, adjList, prereqs); 
    return solveByDFS(adjList); 
}

function initializeGraph(inCounts, adjList, prereqs) {
    for (let i = 0; i < prereqs.length; i++) {
        const [course, prereq] = prereqs[i]; 
        inCounts[course]++; 
        adjList[prereq].push(course); 
    }
}

function solveByDFS(adjList) {
    let visited = new Array(adjList.length).fill(false); // visited array 
    let onStack = new Array(adjList.length).fill(false); // create my stack 
    let order = []; 
    for (let i = adjList.length - 1; i >= 0; i--) {
        if (visited[i] === false && hasOrder(i, adjList, visited, onStack, order) === false) {
            return []; 
        }
    }
    let orderArray = new Array(adjList.length); 
    for (let i = 0; !(order.length === 0); i++) {
        orderArray[i] = order.pop(); 
    } 
    return orderArray; 
}

function hasOrder(i, adjList, visited, onStack, order) {
    visited[i] = true; // we are currently visiting i 
    onStack[i] = true; // we add it to the stack? 
    const children = adjList[i]; 
    for (let i = 0; i < children.length; i++) {
        if (visited[children[i]] === false) {
            // if we've never visited this particular child, go into DFS, and if any child in our DFS retursn false, we return false 
            if (hasOrder(children[i], adjList, visited, onStack, order) === false) return false; 
        } else if (onStack[children[i]] === true) {
            // if we HAVE visited this child before, but this particular child is still on the stack (it should no longer be on the stack if we've visited/processed the child before)
            return false; 
        }
    }
    onStack[i] = false; // we remove the element from the stack 
    order.push(i); // we push the element into our order
    return true; // this particular element which we started, we will return true 
}
```

