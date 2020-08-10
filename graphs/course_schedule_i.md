## Implementation
```js
var canFinish = function(numCourses, prereqs) {
    const inCounts = new Array(numCourses).fill(0); 
    const adjList = new Array(numCourses).fill().map(() => []); 
    
    for (let i = 0; i < prereqs.length; i++) {
        const [course, prereq] = prereqs[i]; 
        inCounts[course]++; 
        adjList[prereq].push(course); 
    }
    
    const q = []; 
    let visitedIdx = 0; 
    for (let i = 0; i < numCourses; i++) {
        if (inCounts[i] === 0) q.push(i); 
    }
    
    while (q.length > 0) {
        const curr = q.shift(); 
        const neighbors = adjList[curr]; 
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i]; 
            inCounts[neighbor]--; 
            if (inCounts[neighbor] === 0) q.push(neighbor); 
        }
        visitedIdx++; 
    }
    
    return visitedIdx === inCounts.length ? true : false; 
};

```