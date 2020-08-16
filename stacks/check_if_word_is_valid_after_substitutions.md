## Overview
Whenever we see a `"abc"` at the end of our stack, we pop it off. 

## Implementation
```js
var isValid = function(S) {
    const stack = []; 
    for (let i = 0; i < S.length; i++) {
        stack.push(S[i]); 
        if (stack.length >= 3 && stack[stack.length-1] === 'c' && stack[stack.length-2] === 'b' && stack[stack.length-3] === 'a') {
            stack.pop(); 
            stack.pop(); 
            stack.pop(); 
        }
    }
    return stack.length === 0; 
};
```

## Complexity
Time: `O(n)` - since we have to process every single character in our string at least once. 
Space: `O(n)` - since at most, we can have that many characters in our stack. 