## Implementation
```js
var allPossibleFBT = function(N) {
    const res = []; 
    
    if (N === 1) {
        const root = new TreeNode(0); 
        res.push(root); 
        return res; 
    }
    
    N = N-1; 
    for (let i = 1; i < N; i+= 2) {
        let left = allPossibleFBT(i); 
        let right = allPossibleFBT(N-i); 
        
        for (let l of left) {
            for (let r of right) {
                const root = new TreeNode(0); 
                root.left = l; 
                root.right = r; 
                res.push(root); 
            }
        }
    }
    
    return res; 
};

```
