## Implementation
```js
var orangesRotting = function(grid) {
    let max = 0; 
    
    const q = []; 
    const visited = new Set(); 
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j, 0]);  
            }
        }
    }
    
    while (q.length > 0) {
        const [x, y, time] = q.shift(); 
        
        grid[x][y] = 2;
        if (visited.has(`${x}_${y}`)) {
            continue; 
        } else {
            visited.add(`${x}_${y}`)
            max = time; 
        }
        
        if (x > 0 && grid[x-1][y] === 1) {
            q.push([x-1, y, time+1]); 
        }
        if (x < grid.length-1 && grid[x+1][y] === 1) {
            q.push([x+1, y, time+1]); 
        }
        if (y > 0 && grid[x][y-1] === 1) {
            q.push([x, y-1, time+1]); 
        }
        if (y < grid[0].length-1 && grid[x][y+1] === 1) {
            q.push([x, y+1, time+1]); 
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) return -1; 
        }
    }
    
    return max; 
};

```

## Complexity
Time: `O(m*n)`
Space: `O(m*n)`
