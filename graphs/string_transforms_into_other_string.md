## Implementation
```js
var canConvert = function(str1, str2) {
    if (str1 === str2) return true; 
    let uniqueChars = (new Set(str2.split(''))).size; 
    
    const visited = new Set(); 
    const h = {}; 
    for (let i = 0; i < str1.length; i++) {
        if (h[str1[i]] === undefined) {
            if (visited.has(h[str2[i]])) return false; 
            h[str1[i]] = str2[i]; 
        } else {
            if (h[str1[i]] !== str2[i]) return false; 
        }
    }
    
    return uniqueChars < 26;  
};
```