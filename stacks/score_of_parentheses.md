## Implementation
```js
// O(n) time, O(n) space 
var scoreOfParentheses = function(S) {
    const stack = []; 
    stack.push(0); 

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(0);
        } else {
            let v = stack.pop();
            let w = stack.pop(); 
            stack.push(w + Math.max(2*v, 1)); 
        }
    }
    return stack.pop(); 
};
```

## Crazy Approach
```js
var scoreOfParentheses = function(S) {
    let res = 0; 
    let bal = 0; 

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            bal++; 
        } else {
            bal--; 
            if (S[i-1] === '(') res += 1 << bal; 
        }
    }
    return res; 
};
```