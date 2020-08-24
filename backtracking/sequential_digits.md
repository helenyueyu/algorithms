## Overview

Even though this is meant to be a backtracking problem...

## Overview
```js
var sequentialDigits = function(low, high) {
    const res = []; 
    
    const numbers = "123456789"; 
    
    let m = (low).toString().length; 
    let n = (high).toString().length; 
    
    for (let i = m; i <= n; i++) {
        for (let j = 0; j <= numbers.length-i; j++) {
            let temp = parseInt(numbers.slice(j, j+i)); 

            if (low <= temp && temp <= high) res.push(temp); 
        }  
    }

    return res; 
};
```

