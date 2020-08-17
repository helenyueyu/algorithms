## Implementation
```js
var smallestCommonElement = function(mat) {
    const m = mat.length; 
    const n = mat[0].length; 
    
    const h = {}; 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const el = mat[i][j]; 
            if (h[el] === undefined) {
                h[el] = 1; 
            } else {
                h[el]++; 
            }
        }
    }
    
    const first = mat[0]; 
    for (let i = 0; i < first.length; i++) {
        if (h[first[i]] === m) return first[i]; 
    }
    return -1; 
};
```

## Complexity
Time: `O(m*n)`
Space: `O(m*n)`
