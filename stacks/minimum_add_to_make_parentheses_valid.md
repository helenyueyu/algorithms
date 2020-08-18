## Implementation
```js
var minAddToMakeValid = function(S) {
    let count = 0; 
    
    const stack = []; 
    let i = 0; 
    while (i < S.length) {
        while (stack.length === 0 && S[i] === ')') {
            i++; 
            count++; 
        }
        if (S[i] === '(') {
            stack.push(S[i]); 
        } else {
            stack.pop(); 
        }
        i++; 
    }
    
    return count + stack.length; 
};
```

## Complexity
Time: `O(n)`, where `n` is the length of the string. 
Space: `O(n)`, since we need to store the stack. 