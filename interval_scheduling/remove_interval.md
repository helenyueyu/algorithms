## Implementation
```js
var removeInterval = function(intervals, toBeRemoved) {
    const res = []; 
    const [rs, re] = toBeRemoved; 
    
    for (let i = 0; i < intervals.length; i++) {
        const [s, e] = intervals[i]; 
        if (e <= rs || s >= re) {
            res.push(intervals[i]); 
        } else if (s <= rs && e >= re) {
            if (rs - s > 0) res.push([s, rs]); 
            if (e - re > 0) res.push([re, e]); 
        } else {
            if (s < rs && rs < e) {
                res.push([s, rs]); 
            } 
            if (s < re && re < e) {
                res.push([re, e]); 
            }
        }
    }
    
    return res; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
