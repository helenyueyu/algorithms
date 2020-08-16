## Overview
Similar to the `valid_anagram` problem, we create an array of **counts** to store frequencies, `+1` for the first string, and `-1` for the second string. 

The slightly tricky part is the total difference needs to be eventually **divided by 2**, since when we replace a **non-matching** character in `s1` with a matching one in `s2`, we are effectively fixing **2 spots**. 

## Implementation
```js
var minSteps = function(s, t) {
    const counts = new Array(26).fill(0); 
    
    for (let i = 0; i < s.length; i++) {
        counts[getIdx(s[i])]++; 
    }
    for (let i = 0; i < t.length; i++) {
        counts[getIdx(t[i])]--; 
    }
    
    let sum = 0; 
    for (let i = 0; i < counts.length; i++) {
        sum += Math.abs(counts[i]); 
    }
    
    return sum / 2; 
};

function getIdx(c) {
    return (c).charCodeAt(0) - 'a'.charCodeAt(0); 
}
```

## Complexity
Time: `O(n)` - we have to iterate through both strings, and both strings have the same length.  
Space: `O(1)`