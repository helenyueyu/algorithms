## Overview
`dp` values are integers. 

`dp[i][j]` represents the minimum path ending with `grid[i][j]`. 

## Implementation
```js
var minPathSum = function(grid) {
    const m = grid.length; 
    const n = grid[0] ? grid[0].length : 0; 
    if (m === 0 || n === 0) return 0; 
    
    const dp = new Array(m).fill().map(() => new Array(n)); 
    
    dp[0][0] = grid[0][0]; 
    
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0]; 
    }
    for (let j = 1; j < dp[0].length; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j]; 
    }
    
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]; 
        }
    }
    return dp[dp.length-1][dp[0].length-1]; 
};
```

## Complexity
Time: `O(m*n)`, where `m` and `n` are the dimensions of the `dp` matrix. 
Space: `O(m*n)`. 