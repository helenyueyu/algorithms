## Implementation
```js
var sortArrayByParityII = function(A) {
    let i = 0; 
    let j = 1; 
    while (i < A.length) {
        while (A[i] % 2 !== 0) {
            [A[i], A[j]] = [A[j], A[i]]; 
            j += 2; 
        }
        i+= 2; 
    }

    return A; 
};
```

## Complexity
Time: `O(n)` ??? I think
Space: `O(1)` - since we're mutating the array


