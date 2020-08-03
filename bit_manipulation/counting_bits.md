## Go back to problem 

## Overview
The naive implementation is to just continually remove the rightmost bit until the number is 0. 

But notice that we aren't using every piece of information at our disposal. 

```js
0    0 1s
1    1 1
10    1 1
11    2 1s
100    1 1
101    2 1s
110    2 1s
111    3 1s
1000    1 1
1001 
1010
10
```

## Naive Implementation
```js
var countBits = function(num) {
    let res = []; 
    for (let i = 0; i <= num; i++) {
        res.push(count(i)); 
    }
    return res; 
};

function count(n) {
    let count = 0; 
    while (n > 0) {
        n = n & (n-1); 
        count++; 
    }
    return count; 
}
```