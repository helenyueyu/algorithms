## Overview
We sort by start date. As we iterate through the array, we update our temporary interval's end if the current interval we're processing is overlapping with our previous interval. Otherwise, we "turn over a new leaf". 

## Implementation
```js
var merge = function(intervals) {
    if (intervals.length === 0) return []; 
    const res = []; 
    intervals = intervals.sort((a,b) => a[0] < b[0] ? -1 : 1); 
    
    let currStart = intervals[0][0]; 
    let currEnd = intervals[0][1]; 
    for (let i = 0; i < intervals.length; i++) {
        const [s, e] = intervals[i]; 
        if (s <= currEnd) {
            currEnd = Math.max(currEnd, e); 
        } else {
            res.push([currStart, currEnd]); 
            [currStart, currEnd] = [s, e]; 
        }
    }
    
    res.push([currStart, currEnd]); 
    
    return res; 
};
```

## Complexity
Time: `O(n log n)` - because of sorting by start time. 
Space: `O(n)` - to store our result. 