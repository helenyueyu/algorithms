## Implementation
```js
var preorderTraversal = function(root) {
    const res = []; 
    const stack = []; 
    while (root) {
        res.push(root.val); 
        if (root.right !== null) {
            stack.push(root.right); 
        }
        root = root.left; 
        if (root === null && stack.length > 0) {
            root = stack.pop(); 
        } 
    }
    return res; 
};
```

```js
var inorderTraversal = function(root) {
    const res = []; 
    const stack = []; 
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root); 
            root = root.left; 
        }
        root = stack.pop(); 
        res.push(root.val); 
        root = root.right; 
    }

    return res; 
};
```