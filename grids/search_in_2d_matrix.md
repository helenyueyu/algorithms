## Implementation
```js
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false; 
    
    let i = 0; 
    let j = matrix[0].length-1; 
    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] < target) {
            i++; 
        } else if (matrix[i][j] > target) {
            j--; 
        } else {
            return true; 
        }
    }
    return false; 
};
```

## Complexity
Time: `O(m + n)`
Space: `O(1)`
