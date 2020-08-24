## Implementation
```js
var letterCasePermutation = function(S) {
    const digits = '0123456789'; 
    const res = []; 
    backtrack("", res, S, 0, digits); 
    return res; 
};

function backtrack(curr, res, S, idx, digits) {
    if (idx >= S.length) {
        res.push(curr.slice(0)); 
        return; 
    }
    if (digits.includes(S[idx])) {
        backtrack(curr + S[idx], res, S, idx+1, digits); 
    } else {
        backtrack(curr + S[idx].toLowerCase(), res, S, idx+1, digits); 
        backtrack(curr + S[idx].toUpperCase(), res, S, idx+1, digits); 
    }
}
```