## LC 191

This question can be solved by iteratively reducing the bitwise representation of the number to 0. Each time we do `i & (i-1)`, we are removing the rightmost 1 digit. 

```js
var hammingWeight = function(n) {
    let count = 0; 
    for (let i = n; i !== 0; i = i & (i-1)) {
        count++; 
    }
    return count; 
};
```
