## Overview
We keep pushing into our stack, checking along the way if the top element in our stack ever equals the first (untouched) element in our **popped** array. If it does, we keep popping until we no longer reach an element in our **popped** array. 


## Implementation
```js
var validateStackSequences = function(pushed, popped) {
    const stack = []; 
    let j = 0; 
    
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]); 
        while (stack[stack.length-1] === popped[j] && stack.length > 0) {
            stack.pop(); 
            j++; 
        }
    }
    
    return stack.length === 0; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`