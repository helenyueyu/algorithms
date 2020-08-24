## Implementation
```js
var combine = function(n, k) {
    const res = []; 
    backtrack([], res, k, n, 1); 
    return res; 
};

function backtrack(curr, res, k, n, idx) {
    if (curr.length === k) {
        res.push(curr.slice(0)); 
        return; 
    }
    for (let i = idx; i <= n; i++) {
        curr.push(i); 
        backtrack(curr, res, k, n, i+1); 
        curr.pop(); 
    }
}
```