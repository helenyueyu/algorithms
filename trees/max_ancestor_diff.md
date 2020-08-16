## Overview

Each root node is going to bubble up the min & the max of that particular subtree

At every root, check the absolute difference between itself and 
    * left child's min and max 
    * right child's min and max 
    
Have a global max

If a root is a null? Return null. 

## Implementation
```js
var maxAncestorDiff = function(root) {
    let max = 0; 
    function recursion(root) {
        if (!root) return null; 
        if (!root.left && !root.right) return [root.val, root.val]; 
        
        let [lMin, lMax] = [root.val, root.val]; 
        let [rMin, rMax] = [root.val, root.val]; 
        
        if (root.left) [lMin, lMax] = recursion(root.left); 
        if (root.right) [rMin, rMax] = recursion(root.right); 
        
        let f1 = Math.abs(lMin - root.val); 
        let f2 = Math.abs(lMax - root.val); 
        let f3 = Math.abs(rMin - root.val); 
        let f4 = Math.abs(rMax - root.val); 
        
        max = Math.max(max, f1, f2, f3, f4); 
        
        return [Math.min(lMin, rMin, root.val), Math.max(lMax, rMax, root.val)]; 
    }
    recursion(root); 
    return max; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`