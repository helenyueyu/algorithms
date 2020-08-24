## Implementation
```js
var removeCoveredIntervals = function(intervals) {
    let count = 0; 
    let left = -1; 
    let right = -1; 
    intervals.sort((a,b) => a[0] - b[0]); 
    for (let interval of intervals) {
        const [s, e] = interval; 
        if (s > left && e > right) {
            left = s; 
            count++; 
        }
        right = Math.max(right, e); 
    }
    return count; 
};
```