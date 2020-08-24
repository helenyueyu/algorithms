## Implementation
```js
var asteroidCollision = function(asteroids) {
    const stack = []; 
    
    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i]; 
        if (curr < 0) {
            let canCurrPush = true; 
            while (stack.length > 0 && stack[stack.length-1] > 0) {
                if (Math.abs(stack[stack.length-1]) > Math.abs(curr)) {
                    canCurrPush = false; 
                    break; 
                } else if (Math.abs(stack[stack.length-1]) < Math.abs(curr)) {
                    stack.pop(); 
                } else {
                    stack.pop(); 
                    canCurrPush = false; 
                    break; 
                }
            } 
            if (canCurrPush) stack.push(curr); 
        } else {
            stack.push(curr); 
        }
    }
    return stack; 
};
```

## Complexity
Time: `O(n)`
space: `O(n)`
