## Old Implementation
```js
var countServers = function(grid) {
    const row = new Array(grid.length).fill(0); 
    const col = new Array(grid[0].length).fill(0); 
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                row[i]++; 
                col[j]++; 
            }
        }
    }
    
    let count = 0; 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                count += row[i] > 1 || col[j] > 1; 
            }
        }
    }
    return count; 
};
```

## Complexity
Time: `O(m*n)`
Space: `O(m + n)`