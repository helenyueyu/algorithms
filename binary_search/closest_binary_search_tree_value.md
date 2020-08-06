## Implementation
```js
var closestValue = function(root, target) {
    let diff = Infinity; 
    let closestVal = Infinity; 
    
    function recursion(root, target) {
        if (!root) return; 
        if (Math.abs(root.val - target) < diff) {
            diff = Math.abs(root.val - target); 
            closestVal = root.val; 
        }
        
        if (target < root.val) {
            recursion(root.left, target); 
        } else if (target > root.val) {
            recursion(root.right, target); 
        } else {
            return root.val; 
        }
    }
    
    recursion(root, target); 
    return closestVal; 
};
```