## Overview
Soooo tricky! Review this problem. 

Basic premise is that when you see that the current element is larger than the **top element** in your stack, you want to keep **popping**, until your **top element** is **larger** than the current element you are considering. In this sense, your stack will always contain elements in **descending order**. We want to store the **indices** of the elements in our stack such that when we encounter an element that is strictly larger, than **for that element in our stack, we have found the first increasing temperature**. 

## Implementation
```js
var dailyTemperatures = function(T) {
    const res = new Array(T.length).fill(0); 
    const stack = []; 
    
    for (let i = 0; i < T.length; i++) {
        if (stack.length > 0) {
            while (T[stack[stack.length-1]] < T[i]) {
                let lastIdx = stack.pop(); 
                res[lastIdx] = i - lastIdx;  
            }
        }
        stack.push(i); 
    }
    return res; 
};
```