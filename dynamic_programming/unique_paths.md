## Overview
The number of ways to get to a specific square is the number of ways to get it from the left or from the top. We know that the top row and the leftmost column can be initialized to 1, since there is only way of getting there. 

## Implementation
```js
var uniquePaths = function(m, n) {
    if (m === 0 || n === 0) return 0; 
    
    const dp = new Array(m).fill().map(() => new Array(n))
    
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1; 
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1; 
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j]; 
        }
    }
    
    return dp[m-1][n-1]; 
};

```

## Complexity
Time: `O(n*m)`. 
Space: `O(n*m)`
