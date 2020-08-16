## Overview
Simple answer is to do **inorder traversal** on both trees, and then merge and sort the result. 


## Better Implementation
```js
var getAllElements = function(root1, root2) {
    const stack1 = []; 
    const stack2 = []; 
    
    const output = []; 
    
    while (root1 !== null || root2 !== null || stack1.length > 0 || stack2.length > 0) {
        while (root1 !== null) {
            stack1.push(root1); 
            root1 = root1.left; 
        }
        while (root2 !== null) {
            stack2.push(root2); 
            root2 = root2.left; 
        }
        
        if (stack2.length === 0 || stack1.length > 0 && stack1[stack1.length-1].val <= stack2[stack2.length-1].val) {
            root1 = stack1.pop(); 
            output.push(root1.val); 
            root1 = root1.right; 
        } else {
            root2 = stack2.pop(); 
            output.push(root2.val); 
            root2 = root2.right; 
        }
    }
    return output; 
};


```

## Implementation
```js
var getAllElements = function(root1, root2) {
    const io1 = inOrder(root1); 
    const io2 = inOrder(root2); 
    const res = io1.concat(io2).sort((a,b) => a < b ? -1 : 1); 
    return res; 
};


function inOrder(root, res=[]) {
    if (root !== null) {
        inOrder(root.left, res); 
        res.push(root.val); 
        inOrder(root.right, res); 
    }
    return res; 
}
```

## Complexity
Time: `O((m + n)log(m + n))`, where `n` and `m` 
Space: `O(m + n)` 