## Overview
We first find 

## Implementation
```js
var search = function (reader, target) {
    let n = 1; 
    while (reader.get(n) !== 2147483647) {
        n *= 2; 
    }
    function recursion(start, end, target) {
        if (start > end) return -1; 
        const mid = Math.floor((start + end)/2); 

        if (reader.get(mid) === target) {
            return mid; 
        } else if (reader.get(mid) > target || reader.get(mid) === 2147483647) {
            return recursion(start, mid-1, target); 
        } else {
            return recursion(mid+1, end, target); 
        }
    }
    return recursion(0, n, target); 
};
```

## Complexity
Time: `O(log n)` - `O(log n)` to find the "end" of the array, and another `O(log n)` to conduct normal binary search. 
Space: `O(1)`, since we only store information about the mid. 