## Implementation
```js
var generateParenthesis = function(n) {
    const res = []; 
    backtrack('', 0, 0, res, n); 
    return res; 
};

function backtrack(curr, nStart, nEnd, res, n) {
    if (curr.length === 2*n) res.push(curr.slice(0)); 
    if (nStart < n) {
        backtrack(curr + '(', nStart + 1, nEnd, res, n); 
    }
    if (nStart > nEnd) {
        backtrack(curr + ')', nStart, nEnd + 1, res, n); 
    }
}
```