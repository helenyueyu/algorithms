## Implementation
```js
// works but is too slow
var checkIfPrerequisite = function(n, prereqs, queries) {
    const adjList = new Array(n).fill().map(() => []); 
    
    for (let i = 0; i < prereqs.length; i++) {
        const [prereq, course] = prereqs[i]; 
        adjList[prereq].push(course); 
    }
    
    const res = []; 
    
    for (let i = 0; i < queries.length; i++) {
        const [prereq, course] = queries[i]; 
        res.push(isPrereq(prereq, course, adjList)); 
    }
    return res; 
};

function isPrereq(prereq, course, adjList) {
    let q = [prereq]; 
    while (q.length > 0) {
        const curr = q.shift(); 
        if (curr === course) return true; 
        const neighbors = adjList[curr]; 
        for (let i = 0; i < neighbors.length; i++) {
            q.push(neighbors[i]); 
        }
    }
    return false; 
}
```