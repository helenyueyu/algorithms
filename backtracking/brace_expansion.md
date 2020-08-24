## Implementation
```js
var expand = function(S) {
    const res = []; 
    backtrack("", res, 0, S); 
    return res.sort(); 
};

function backtrack(curr, res, idx, S) {
    if (idx >= S.length) {
        res.push(curr.slice(0)); 
        return; 
    }
    
    let i = idx; 
    if (S[i] === '{') {
        while (S[i] !== '}') {
            i++; 
        }
        let stack = S.slice(idx+1, i).split(','); 
        for (let k = 0; k < stack.length; k++) {
            backtrack(curr + stack[k], res, i+1, S); 
        }
    } else {
        backtrack(curr + S[i], res, i+1, S); 
    }
}
```

## Complexity
Time: ???
Space: 