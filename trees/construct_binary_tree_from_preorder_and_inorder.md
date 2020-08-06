## Overview
We can think of the first element of the preorder sequence as giving us the root, and the fulcrum in which to divide our inorder sequence into left and right halves. 


## Implementation
```js
var buildTree = function(preorder, inorder) {
    function recursion(preorder, inorder, start, end, idx) {
        if (start > end) return null; 
        
        const mid = preorder[idx]; 
        let root = new TreeNode(mid); 
        
        let midIdx = inorder.indexOf(mid); 
        
        root.left = recursion(preorder, inorder, start, midIdx-1, idx+1); 
        root.right = recursion(preorder, inorder, midIdx+1, end, idx+(midIdx-start) + 1); 
        return root; 
    }
    return recursion(preorder, inorder, 0, preorder.length-1, 0); 
};
```

## Old Implementation with Slicing (Bad)
```js
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) return null; 
    
    let mid = preorder.shift(); 
    let root = new TreeNode(mid); 

    let midIdx = inorder.indexOf(mid); 
    
    root.left = buildTree(preorder, inorder.slice(0, midIdx)); 
    root.right = buildTree(preorder, inorder.slice(midIdx+1)); 
    
    return root; 
};
```
