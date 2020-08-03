## Overview
Using the `^` trick, we cancel out all pairs, leaving behind the single number. 

```js
var singleNumber = function(nums) {
    let res = 0; 
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]; 
    }
    return res; 
};
```