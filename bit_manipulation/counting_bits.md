## Go back to problem 

## Overview
The naive implementation is to just continually remove the rightmost bit until the number is 0. 

But notice that we aren't using every piece of information at our disposal. 

```js
000     0 
001     1 
010     1 
011     2 
100     1 
101     2 
110     2
111     3

1000    1
1001    2
1010    2
1011    3
1100    2
1101    3
1110    3
1111    4
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