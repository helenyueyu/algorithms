## Implementation
```js
var longestPalindrome = function(s) {
    let length = 0; 
    let existsOdd = false;  
    const h = {}; 
    for (let i = 0; i < s.length; i++) {
        if (h[s[i]] === undefined) {
            h[s[i]] = 1; 
        } else {
            h[s[i]]++; 
        }
    }
    
    for (let k in h) {
        if (h[k] % 2 === 0) {
            length += h[k]; 
        } else {
            length += h[k]-1;  
            existsOdd = true; 
        }
    }

    return existsOdd === false ? length : length + 1;  
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`
