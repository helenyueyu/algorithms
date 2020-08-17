## Implementation
```js
var bstFromPreorder = function(preorder) {
    return recursion(preorder, 0, preorder.length-1); 
};

function recursion(arr, i, j) {
    if (i > j) return null; 
    const root = new TreeNode(arr[i]); 
    
    let k = i+1; 
    while (arr[k] < root.val) {
        k++; 
    }
    
    root.left = recursion(arr, i+1, k-1); 
    root.right = recursion(arr, k, j); 
    
    return root; 
}
```

## Complexity
Time: `O(n)`
Space: `O(n)`
