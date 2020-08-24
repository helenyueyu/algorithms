## Implementation
```js
var calculate = function(s) {
    const digits = '0123456789'; 
    
    const stack = []; 
    let operand = 0; 
    let result = 0; 
    let sign = 1; 
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i]; 
        if (digits.includes(c)) {
            operand = 10*operand + parseInt(c); 
        } else if (c === '+') {
            result += sign*operand; 
            sign = 1; 
            operand = 0; 
        } else if (c === '-') {
            result += sign*operand; 
            sign = -1; 
            operand = 0; 
        } else if (c === '(') {
            stack.push(result); 
            stack.push(sign); 
            sign = 1; 
            result = 0; 
        } else if (c === ')') {
            result += sign * operand; 
            result *= stack.pop(); 
            result += stack.pop(); 
            operand = 0; 
        }
    }
    return result + (sign*operand); 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
