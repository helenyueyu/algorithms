## Implementation
```js
function dieSimulator(n, rollMax) {
    const divisor = Math.pow(10, 9) + 7; 
    const dp = new Array(n).fill().map(() => new Array(7).fill(0)); 

    for (let i = 0; i < 6; i++) {
        dp[0][i] = 1; 
    }
    dp[0][6] = 6; 
    for (let i = 1; i < n; i++) {
        let sum = 0; 
        for (let j = 0; j < 6; j++) {
            dp[i][j] = dp[i - 1][6]; 
            if (i - rollMax[j] === 1) {
                dp[i][j]--; 
            }
            if (i - rollMax[j] >= 2) {
                let reduction = dp[i - 1 - rollMax[j]][6] - dp[i - rollMax[j] - 1][j];
                dp[i][j] = ((dp[i][j] - reduction) % mod + mod) % mod;
            }
            total = (total + dp[i][j]) % mod; 
        }
        dp[i][6] = total; 
    }
    return dp[n][6]; 
}
```