## Implementation

**Edge cases**: We know for a fact that numbers `n <= 0` are for sure not powers of two, so we rule them out. 

There is a trick we employ here. This: `n & (n-1) === 0` will only be true for powers of two, since for any power of two, the most significant digit will be a `1` and all of the following digits will be `0`, whereas the element right before that will have that most significant place be `0`, and every bit to the right be set to `1`. 

The code is below: 

```js
var isPowerOfTwo = function(n) {
    if (n <= 0) return false; 
    return (n & (n-1)) === 0; 
};
```

