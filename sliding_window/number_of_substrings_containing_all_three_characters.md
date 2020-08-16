## Overview

## New (working!)
```js
var numberOfSubstrings = function(s) {
    if (s.length < 3) return 0; 
    
    let count = 0; 
    
    let i = 0; 
    let j = 2; 
    
    while (i < s.length-2) {
        let arr = [0, 0, 0]; 
        let num = 0; 
        for (let k = i; k <= j; k++) {
            const idx = getIdx(s[k]); 
            if (arr[idx] === 0) num++; 
            arr[idx]++; 
        }
        while (num < 3 && j < s.length-1) {
            j++; 

            const idx = getIdx(s[j]); 
            if (arr[idx] === 0) num++; 
            arr[idx]++; 
        }
        // forgot to add the conditional here to check 
        if (num === 3) { count += s.length - j; }
        i++; 
        j = i+2; 
    }
    return count; 
};

function getIdx(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0); 
}
```

## Old (Not working code)
```js
var numberOfSubstrings = function(s) {
    let count = 0; 
    
    let i = 0; 
    let j = 2; 
    
    while (i < s.length-2) {
        let arr = [0, 0, 0]; 
        let num = 0; 
        for (let k = i; k <= j; k++) {
            const idx = getIdx(s[k]); 
            if (arr[idx] === 0) num++; 
            arr[idx]++; 
        }
        while (num < 3) {
            j++; 
            const idx = getIdx(s[j]); 
            if (arr[idx] === 0) num++; 
            arr[idx]++; 
        }
        count += s.length - j; 
        i++; 
        j = i+2; 
    }
    return count; 
};

function getIdx(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0); 
}

```