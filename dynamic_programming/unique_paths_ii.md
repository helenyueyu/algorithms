## Overview

Same idea as the `unique_paths_i` problem, only we set the `dp[i][j]` property to `0` if the square holds an obstacle. If the square either has a west-bound or north-bound obstacle, we would add `0` by this property. 

We do have to be a little careful with setting up the first row and the first column, since all squares in these two regions **can only be reached from the left/top, respectively**. So in order to place a `1`, it is not just sufficient that `obstaclesGrid[i][j] === 0`, we also have to check that the previous top/left element has a key of `1`, telling us that we can reach the previous element. 

## Implementation
```js
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length; 
    const n = obstacleGrid[0] ? obstacleGrid[0].length : 0; 
    if (m === 0 || n === 0) return 0; 
    
    const dp = new Array(m).fill().map(() => new Array(n)); 
    
    dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1; 
    
    for (let i = 1; i < m; i++) {
        dp[i][0] = (dp[i-1][0] !== 0 && obstacleGrid[i][0] !== 1) ? 1 : 0; 
    }
    
    for (let j = 1; j < n; j++) {
        dp[0][j] = (dp[0][j-1] !== 0 && obstacleGrid[0][j] !== 1) ? 1 : 0; 
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0; 
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]; 
            }
        }
    }
    
    return dp[m-1][n-1]; 
};
```

## Complexity
Time: `O(m*n)`
Space: `O(m*n)`
