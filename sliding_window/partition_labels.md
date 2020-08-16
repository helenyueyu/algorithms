## Overview
The idea is to first create a hash of **start indices** and **end indices** for each letter. 

We take the first letter and take it as a **tentative interval**. What we do, **in this tentative interval**, is that we iterate through each character **inside** the **tentative interval**, checking grabbing that specific characters **interval**. We know that, for the current tentative interval we're looking at, the new interval's start time **cannot precede the current tentative interval's start time**: 

* because if that were true, then, **the letter** that belongs to the **current** interval **would have been greedily picked up by a prior interval** 
* Note: Not sure I even completely grasp the above concept myself, but I think there must be someway to prove this greedy approach works. 

## Implementation
```js
/* 
a: [0, x]
b: [s, s]
c: [s, s]


[start_a, end_a] is a candidate 
    check every letter in that bound, if any letter has a larger range, update it? 
    
    sort of like a greedy algorithm 
*/
var partitionLabels = function(S) {
    const intervals = []; 
    
    const h = {}; 
    for (let i = 0; i < S.length; i++) {
        if (h[S[i]] === undefined) {
            h[S[i]] = [i, i]; 
        } else {
            h[S[i]][1] = i; 
        }
    }
    
    // what is the interval for the first letter? 
    let [start, end] = h[S[0]]; 
    
    // while we haven't reached the last interval 
    while (end < S.length) {
        for (let i = start; i <= end; i++) {
            // we know that tempStart > start, 
            // because if it wasn't, this particular letter
            // would have been part of an earlier partition 
            let [tempStart, tempEnd] = h[S[i]]; 
            if (tempEnd > end) end = tempEnd; 
        }
        intervals.push(end - start + 1); 
        if (S[end+1] === undefined) break; 
        [start, end] = h[S[end+1]]; 
    }
    return intervals; 
};
```

## Complexity
Time: `O(n)` - `O(n)` for the initial creation of the hash, and `O(n)` to iterate through all of the letters in each **tentative initial partition** in order to decide whether to expand the **end** boundary. 
Space: `O(1)`, since we have at most `26` letters stored as keys in our hash. One could argue that the length of `intervals` is similarly bounded, since our input only contains lower case letters. 