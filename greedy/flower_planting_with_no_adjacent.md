## Overview

Greedily paint - since each garden cannot have more than 3 outgoing edges, it always guaranteed a solution. 

1. We create an adjacency list. 
2. We iterate through each flower bed. For each flower bed:  
    * We initialize a color array with 5 "unvisited" colors. 
    * We iterate through its neighbors. 
        * If the neighbor hasn't yet been colored, we do nothing (filling out the zero index, but this isn't a valid color).  
        * If the neighbor has been colored, we flip the boolean to a 1 for that specific color. 
    * When it's time to color in, we choose the first "untaken" color. 

## New Implementation (correct)
```js
var gardenNoAdj = function(N, paths) {  
    const res = new Array(N+1).fill(0); 
    
    const adjList = new Array(N+1).fill().map(() => new Set()); 
    
    for (let i = 0; i < paths.length; i++) {
        const [e1, e2] = paths[i]; 
        adjList[e1].add(e2); 
        adjList[e2].add(e1); 
    }  
    
    for (let i = 1; i <= N; i++) {
        const colors = new Array(5).fill(0); 
        
        const neighbors = adjList[i]; 
        for (let neighbor of neighbors) {
            colors[res[neighbor]] = 1; 
        }
        
        for (let c = 1; c <= 4; c++) {
            if (colors[c] === 0) {
                res[i] = c; 
                break; 
            }
        }
    } 
    
    return res.slice(1); 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`

## Old Implementation (broken)
```js
var gardenNoAdj = function(N, paths) {  
    let takenColors; 
    const colors = new Array(N+1).fill(0); 
    
    const adjList = new Array(N+1).fill().map(() => new Set()); 
    
    for (let i = 0; i < paths.length; i++) {
        const [e1, e2] = paths[i]; 
        adjList[e1].add(e2); 
        adjList[e2].add(e1); 
    }  
    
    colors[1] = 1; 
    let neighbors = adjList[1]; 
    let color = 2; 
    for (let neighbor of adjList[1]) {
        colors[neighbor] = color; 
        color++; 
    }
    /* 
    1: { 2 }, 
    2: { 1 }, 
    3: { 4 }, 
    4: { 3 } 
    */
    // [0, 1, 2, 0, 0]
    
    for (let i = 2; i <= N; i++) {
        const neighbors = adjList[i]; 
        let considered = [i].concat(Array.from(neighbors)); // [3, 4]
        takenColors = new Set(); 
        
        // console.log("considered", considered)
        for (let garden of considered) {
            // console.log("garden", garden)
            if (colors[garden] !== 0) takenColors.add(colors[garden]); 
        }
        // console.log(takenColors)
        
        const untakenColors = []; 
        for (let i = 1; i <= 4; i++) {
            if (!takenColors.has(i)) untakenColors.push(i); 
        }
        for (let garden of considered) {
            if (colors[garden] === 0) {
                colors[garden] = untakenColors.pop(); 
            }
        }
    } 
    
    return colors.slice(1); 
};
```