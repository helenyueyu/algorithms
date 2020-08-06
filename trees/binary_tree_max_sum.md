## Implementation
```js
var maxPathSum = function(root) {
    let max = -Infinity; 
    function recursion(root) {
        if (!root) return 0;
        let l = recursion(root.left); 
        let r = recursion(root.right);
        max = Math.max(max, root.val + Math.max(l + r, l, r, 0)); 
        return root.val + Math.max(0, l, r); 
    }
    recursion(root); 
    return max; 
};
```