## Implementation

## Too slow
```js
var jump = function(nums) {
    const dp = new Array(nums.length).fill(-1); 
    
    dp[0] = 0; 
    
    for (let i = 0; i < dp.length; i++) {
        const maxJump = nums[i]; 
        for (let j = 1; j <= maxJump; j++) {
            if (dp[i+j] === undefined) continue; 
            if (dp[i+j] === -1) {
                dp[i+j] = 1 + dp[i]; 
            } else {
                dp[i+j] = Math.min(dp[i+j], 1 + dp[i]); 
            }
        }
    }
    
    return dp[dp.length-1]; 
};
```