## Implementation
```js
var setZeroes = function(matrix) {
    const rows = new Set(); 
    const cols = new Set(); 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i); 
                cols.add(j); 
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rows.has(i) || cols.has(j)) matrix[i][j] = 0; 
        }
    }
};
```

## Complexity
Time: `O(m*n)`
Space: `O(m + n)`
