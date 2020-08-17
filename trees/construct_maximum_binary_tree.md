## Implementation
```js
var constructMaximumBinaryTree = function(nums) {
    return recursion(nums, 0, nums.length-1); 
};

function recursion(arr, i, j) {
    if (i > j) return null; 
    
    let max = arr[i]; 
    let maxIdx = i; 
    
    for (let k = i+1; k <= j; k++) {
        if (arr[k] > max) {
            max = arr[k]; 
            maxIdx = k; 
        }
    }
    
    let root = new TreeNode(max); 
    root.left = recursion(arr, i, maxIdx-1); 
    root.right = recursion(arr, maxIdx+1, j); 
    
    return root;
}
```

## Complexity
Time: `O(n)`, where `n` is the number of nodes in the tree. 
Space: `O(n)` for recursive call stack. 