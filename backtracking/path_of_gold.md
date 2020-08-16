## Implementation
```js
var getMaximumGold = function(grid) {
    let max = -Infinity; 
    let visited = new Set(); 
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 0) {
                backtrack(grid, i, j, visited, 0); 
            }
        }
    }
    function backtrack(grid, i, j, visited, sum) {
        if (visited.has(`${i}${j}`) || 
            i < 0 || i >= grid.length || 
            j < 0 || j >= grid[0].length || 
            grid[i][j] === 0) {
            max = Math.max(max, sum); 
            return; 
        } else {
            visited.add(`${i}${j}`); 
            backtrack(grid, i+1, j, visited, sum + grid[i][j]); 
            backtrack(grid, i-1, j, visited, sum + grid[i][j]); 
            backtrack(grid, i, j-1, visited, sum + grid[i][j]); 
            backtrack(grid, i, j+1, visited, sum + grid[i][j]); 
            visited.delete(`${i}${j}`); 
        }
    }
    
    return max; 
};
```