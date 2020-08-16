## Overview
Note: We use **Euclid's algorithm** to help us calculate the **GCD**. 

## Implementation
```js
var hasGroupsSizeX = function(deck) {
    const h = {}; 
    
    for (let i = 0; i < deck.length; i++) {
        if (h[deck[i]] === undefined) {
            h[deck[i]] = 1; 
        } else {
            h[deck[i]]++; 
        }
    }
    
    const vals = Object.values(h); 
    const initialGCD = gcd(vals[0], vals[1]); 
    const res = vals.slice(1).reduce((v1, v2) => gcd(v1, v2), initialGCD); 
    
    return res >= 2 ? true : false; 
};

function gcd(a, b) {
    while (b > 0) {
        t = a % b; 
        a = b; 
        b = t; 
    }
    return a; 
}
```

## Complexity
Time: `O(n)`