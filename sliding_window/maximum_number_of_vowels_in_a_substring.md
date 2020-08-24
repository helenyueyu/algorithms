## Implementation
```js
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); 
    
    let max = 0;
    let currMax = 0; 
    
  
    for (let j = 0; j < k; j++) {
        if (vowels.has(s[j])) currMax++; 
    }
    max = Math.max(max, currMax); 
    
    let i = 0; 
    let j = k-1;

    while (j < s.length) {
        if (vowels.has(s[i])) currMax--; 
        if (vowels.has(s[j+1])) currMax++; 
        i++; 
        j++; 
        max = Math.max(max, currMax); 
    }
    
    return max; 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`