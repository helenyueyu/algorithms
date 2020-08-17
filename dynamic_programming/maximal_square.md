## Implementation
```js
var maximalSquare = function(matrix) {
    const m = matrix.length; 
    const n = matrix[0] ? matrix[0].length : 0;  
    let max = 0; 

    if (m === 0 || n === 0) return max; 

    const dp = new Array(m).fill().map(() => new Array(n).fill(0)); 
    
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = matrix[i][0];
        max = Math.max(max, dp[i][0]); 
    }
    for (let j = 0; j < dp[0].length; j++) {
        dp[0][j] = matrix[0][j]; 
        max = Math.max(max, dp[0][j]); 
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
                max = Math.max(max, dp[i][j]); 
            }
        }
    }
    
    return max**2; 
};
```

## Complexity
Time: `O(m*n)`
Space: `O(m*n)`
