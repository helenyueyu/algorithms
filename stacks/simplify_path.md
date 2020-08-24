## Implementation
```js
var simplifyPath = function(path) {
    const stack = []; 
    const parsed = path.split('/'); 
    
    for (let i = 0; i < parsed.length; i++) {
        if (parsed[i] === "" || parsed[i] === '.') continue; 
        if (parsed[i] === "..") {
            stack.pop(); 
        } else {
            stack.push(parsed[i]); 
        }
    }

    return '/' + stack.join('/'); 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
