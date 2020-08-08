## Implementation

```js
var leafSimilar = function(root1, root2) {
    const leaves1 = []; 
    const leaves2 = []; 
    
    dfs(root1, leaves1); 
    dfs(root2, leaves2); 
    
    return isIdentical(leaves1, leaves2); 
};

function dfs(root, leaves) {
    if (!root) return; 
    if (!root.left && !root.right) leaves.push(root.val); 
    if (root.left) dfs(root.left, leaves); 
    if (root.right) dfs(root.right, leaves); 
}

function isIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; 
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false; 
    }
    return true; 
}

```