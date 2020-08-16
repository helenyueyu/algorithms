## Implementation
```js
var bstToGst = function(root) {
    let sum = 0; 
    function reverseInOrder(root) {
        if (root) {
            reverseInOrder(root.right); 
            sum += root.val; 
            root.val = sum; 
            reverseInOrder(root.left); 
        } 
        return root; 
    }
    reverseInOrder(root); 
    return root; 
};
```
