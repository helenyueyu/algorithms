## Implementation
```js
var minimumSemesters = function(N, prereqs) {
    const inCounts = new Array(N+1).fill(0); 
    const adjList = new Array(N+1).fill().map(() => []); 
    initializeGraph(inCounts, adjList, prereqs); 
    return solveByBFS(inCounts, adjList); 
};

function initializeGraph(inCounts, adjList, prereqs) {
    for (let i = 0; i < prereqs.length; i++) {
        const [prereq, course] = prereqs[i]; 
        inCounts[course]++; 
        adjList[prereq].push(course); 
    }
}

function solveByBFS(inCounts, adjList) {
    let max = 0; 
    let count = 0; 
    
    const q = []; 
    for (let i = 1; i < inCounts.length; i++) {
        if (inCounts[i] === 0) q.push([i, 1]); 
    }
    while (q.length > 0) {
        const [prereq, steps] = q.shift(); 
        max = Math.max(max, steps); 
        const children = adjList[prereq]; 
        for (let i = 0; i < children.length; i++) {
            inCounts[children[i]]--; 
            if (inCounts[children[i]] === 0) q.push([children[i], steps+1]); 
        }
        count++; 
    }
    return count === inCounts.length-1 ? max : -1; 
}
```