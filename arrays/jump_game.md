## Implementation

## Dynamic Programming Approach
```js
var canJump = function(nums) {
    const dp = new Array(nums.length).fill(false); 
    
    dp[0] = true; 
    for (let i = 0; i < nums.length; i++) {
        if (dp[i] === false) return false; 
        for (let j = 1; j <= nums[i]; j++) {
            if (dp[i+j] === false) {
                dp[i+j] = true; 
            }
        }
    }
    return dp[dp.length-1] === true; 
};
```

## Brute Force - with Queue - too slow 
```js
var canJump = function(nums) {
    const q = [0]; 
    
    while (q.length > 0) {
        const curr = q.shift(); 
        if (curr === nums.length-1) return true; 
        const maxJump = nums[curr]; 
        for (let i = 1; i <= maxJump; i++) {
            q.push(curr + i); 
        }
    }
    return false; 
};
```
