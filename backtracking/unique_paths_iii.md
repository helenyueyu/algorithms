## Implementation
```js
function uniquePathsIII(grid) {
    let sx; 
    let sy; 
    let emptySquares = 0; 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                sx = i; 
                sy = j; 
            } 
            if (grid[i][j] !== -1) emptySquares++; 
        }
    }
    return dfs(grid, sx, sy, 1, emptySquares); 
};

function dfs(grid, i, j, steps, emptySquares) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === -1) return 0; 
    if (grid[i][j] === 2) return steps === emptySquares ? 1 : 0; 
    grid[i][j] = -1; 
    let f1 = dfs(grid, i-1, j, steps+1, emptySquares); 
    let f2 = dfs(grid, i+1, j, steps+1, emptySquares);
    let f3 = dfs(grid, i, j-1, steps+1, emptySquares);
    let f4 = dfs(grid, i, j+1, steps+1, emptySquares);
    grid[i][j] = 0; 
    return f1 + f2 + f3 + f4; 
}
```