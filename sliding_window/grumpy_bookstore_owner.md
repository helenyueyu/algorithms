## Overview
We create a sliding window, where the number `curr` represents the number of additional customers that would be satisfied. 

## Implementation
```js
var maxSatisfied = function(customers, grumpy, X) {
    let max = 0;
    let curr = 0; // represents the maximum number of unhappy customers the grumpy owner can "save" with this particular sliding window  
    
    let i = 0; 
    let j = 0; 
    while (j < X) {
        if (grumpy[j] === 1) { 
            curr += customers[j]; 
            max = Math.max(max, curr); 
        }; 
        j++; 
    }
    j--; 
    
    while (j < customers.length) {
        if (grumpy[i] === 1) curr -= customers[i]; 
        if (grumpy[j+1] === 1) curr += customers[j+1]; 
        i++; 
        j++; 
        max = Math.max(max, curr); 
    }
    
    let baseline = 0; 
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) baseline += customers[i]; 
    }
    
    return baseline + max; 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`. 
