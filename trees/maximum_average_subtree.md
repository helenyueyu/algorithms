## Overview
bottom up - to avoid recalculating work 
each node is going to return up two pieces of information
    count: total number of nodes in the subtree
       sum: total sum from the subtree 
    can return as a tuple 

## Implementation
```js
var maximumAverageSubtree = function(root) {
    let maxAvg = -Infinity; 
    function recursion(root) {
        if (!root) return [0, 0]; 
        
        const [leftCount, leftSum] = recursion(root.left); 
        const [rightCount, rightSum] = recursion(root.right); 
        
        const count = 1 + leftCount + rightCount; 
        const sum = root.val + leftSum + rightSum; 
        
        const avg = sum / count; 
        
        if (avg !== Infinity) {
            maxAvg = Math.max(avg, maxAvg);
        }
        
        return [count, sum];
    }
    recursion(root); 
    return maxAvg; 
};
```

## Complexity
Time: `O(n)`, if unbalanced 
Space: `O(n)`