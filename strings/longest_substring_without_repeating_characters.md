## Implementation
```js
var lengthOfLongestSubstring = function(s) {
    let max = 0; 
    const h = {}; 
    
    let i = 0; 
    let j = 0; 
    
    while (j < s.length) {
        if (h[s[j]] !== undefined) {
            i = Math.max(i, h[s[j]] + 1); 
        }
        h[s[j]] = j; 
        max = Math.max(j - i + 1, max); 
        j++; 
    }
    
    return max; 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`
