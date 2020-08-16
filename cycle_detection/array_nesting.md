## Overview
This question is related to **cycle finding**. The meat and potatoes boils down to finding the **longest cycle** in this matrix. 

We create a **visited** set. The inner while loop will run completely until we complete **one cycle**. Every time we encounter a new element in our cycle, we will increment our `count` variable, which will keep track of the length of the current cycle we are at. Our `max` variable will keep track of the largest cycle we have ever seen. 

## Implementation
```js
var arrayNesting = function(nums) {
    const visited = new Set(); 
    let max = 0; 
    let count = 0; 
    
    for (let i = 0; i < nums.length; i++) {
        while (!visited.has(i)) {
            visited.add(i); 
            i = nums[i]; 
            count++; 
        }
        max = Math.max(max, count); 
        count = 0; 
    }
    return max; 
};

```

## Complexity
Time: `O(n)`, since we are at most processing `n` elements. 
Space: `O(n)`, since we need to store our elements in a `visited` set. 