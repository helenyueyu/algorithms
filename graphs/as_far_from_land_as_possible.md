## This is incorrect (why?)
```js
var maxDistance = function(grid) {
    let max = 0; 
    
    const res = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill()); 
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const visited = new Set(); 
            const temp = dfs(grid, i, j, visited); 
            max = Math.max(max, temp); 
            res[i][j] = temp; 
        }
    }
    return max; 
};

function dfs(grid, i, j, visited) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || visited.has(`${i}_${j}`)) {
        return Infinity; 
    }
    visited.add(`${i}_${j}`);
    
    if (grid[i][j] === 1) {
        return 0; 
    } else {
        let f1 = dfs(grid, i-1, j, visited); 
        let f2 = dfs(grid, i+1, j, visited); 
        let f3 = dfs(grid, i, j-1, visited); 
        let f4 = dfs(grid, i, j+1, visited); 

        return 1 + Math.min(f1, f2, f3, f4); 
    }
}
```

```js
var maxDistance = function(grid) {
    let max = 0; 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const visited = new Set(); 
            max = Math.max(max, dfs(grid, i, j, visited)); 
        }
    }
    return max; 
};

function dfs(grid, i, j, visited) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || visited.has(`${i}_${j}`)) {
        return Infinity; 
    }
    visited.add(`${i}_${j}`);
    
    if (grid[i][j] = 1) {
        return 0; 
    } else {
        let f1 = dfs(grid, i-1, j, visited); 
        let f2 = dfs(grid, i+1, j, visited); 
        let f3 = dfs(grid, i, j-1, visited); 
        let f4 = dfs(grid, i, j+1, visited); 
        return 1 + Math.max(f1, f2, f3, f4); 
    }
}
```