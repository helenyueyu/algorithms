## Overview
Remove the islands in the boundary (cover them with water).

Then standard dfs. 

## Implementation
```js
var closedIsland = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i*j === 0 || i === grid.length-1 || j === grid[i].length-1) {
                if (grid[i][j] === 0) {
                    dfs(grid, i, j); 
                }
            }
        }
    }
    
    let count = 0; 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                dfs(grid, i, j); 
                count++; 
            }
        }
    }
    
    return count; 
};

function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 1) {
        return; 
    }
    grid[i][j] = 1; 
    dfs(grid, i-1, j); 
    dfs(grid, i+1, j); 
    dfs(grid, i, j-1); 
    dfs(grid, i, j+1); 
}
```

Time: `O(m*n)`, where `m, n` are the dimensions of the grid. 
Space: `O(m*n)`