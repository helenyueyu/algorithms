## Implementation
```js
var combinationSum = function(candidates, target) {
    const res = []; 
    backtrack([], res, target, candidates, 0); 
    return res; 
};

function backtrack(curr, res, target, candidates, idx) {
    if (target < 0) return; 
    if (target === 0) {
        res.push(curr.slice(0)); 
    }
    for (let i = idx; i < candidates.length; i++) {
        curr.push(candidates[i]); 
        backtrack(curr, res, target-candidates[i], candidates, i); 
        curr.pop(); 
    }
}
```
