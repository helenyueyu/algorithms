## Implementation
```js
// Ugly code 
var getHint = function(secret, guess) {
    const h = {}; 
    for (let i = 0; i < secret.length; i++) {
        h[secret[i]] = h[secret[i]] === undefined ? 1 : 1 + h[secret[i]]; 
    }
    
    let bulls = 0; 
    let cows = 0; 
    
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            bulls++; 
            h[guess[i]]--; 
        } 
        if (h[guess[i]] === 0) delete h[guess[i]]; 
    }
    
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) continue; 
        if (h[guess[i]] !== undefined) {
            cows++; 
            h[guess[i]]--; 
        }
        if (h[guess[i]] === 0) delete h[guess[i]]; 
    }

    
    return `${bulls}A${cows}B`; 
};
```

## Complexity
Time: `O(n)`
Space: `O(n)`
