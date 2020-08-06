## Overview
We initiate a stack. 

The idea is that we store two properties for each node that we push into our stack: 

1. The value of the current element. 
2. The **minimum of the elements currently in the stack so far**. The tricky part is how do we get this? Each time we push in an element, **we check the top of the stack's minimum**. If our current element is smaller, we update our minimum. Else, we keep the existing minimum. Whenever we pop off an element, we only update the minimum if the minimum value is due to the node we popped off. Then we "reveal" the previous minimum. 

## Implementation
```js
var MinStack = function() {
    this.stack = []; 
};

MinStack.prototype.push = function(x) {
    const last = this.stack[this.stack.length-1]; 
    let currMin = last === undefined ? Infinity : last[1]; 
    this.stack.push([x, Math.min(currMin, x)]); 
};

MinStack.prototype.pop = function() {
    this.stack.pop(); 
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0]; 
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1]; 
};

```

## Complexity
Time: `O(1)` for `push`, `pop`, `top` and `getMin`. 
Space: `O(n)`, where `n` represents the number of elements in our stack. 