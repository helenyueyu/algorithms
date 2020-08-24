## Implementation
```js
var removeDuplicates = function(s, k) {
    const stack = []; 
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]); 
        if (stack.length >= k) {
            if (lastKIdentical(stack, k)) {
                let j = k; 
                while (j > 0) {
                    stack.pop(); 
                    j--; 
                }
            }
        }
    }
    return stack.join(''); 
};

function lastKIdentical(arr, K) {
    let last = arr[arr.length-1]; 
    for (let i = arr.length-1; i > arr.length-1-K; i--) {
        if (arr[i] !== last) return false; 
    }
    return true; 
}
```

## Complexity
Time: `O(n)`
Space: `O(n)`
