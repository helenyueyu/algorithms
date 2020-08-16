## Overview
Put the position of the last element in its rightful place. 

* If it is, continue. 
* If it's not, then we need to flip that element at that index (so it's at 1), and flip it again. 

## Implementation
```js
var pancakeSort = function(A) {
    let res = []; 
    let i = A.length; 
    
    while (!sorted(A)) {
        let idx = A.indexOf(i); 
        res.push(idx + 1); 
        A = A.slice(0, idx + 1).reverse().concat(A.slice(idx + 1)); 
        res.push(i); 
        A = A.slice(0, i).reverse().concat(A.slice(i)); 
        i--; 
    }
    
    return res; 
};

function sorted(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] > arr[i+1]) return false; 
    }
    return true; 
}
```

## Complexity 
Time: `O(n^2)`
Space: `O(n)`, because of our `res` array. 