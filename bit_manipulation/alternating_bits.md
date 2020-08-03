## Implementation

We can think of `bit shifting` to help us accomplish something. For example, the number `21`, which can be represented as: 

```js
// if we use the & operator on the number and its right bit shift, we only get zeroes 
"10101" 
 "1010" // 21 >> 1 
------
"00000"

"10100"
 "1010" // unfortunately, there is a likelihood of a false positive, as two 0s also lead to a zero 

"10101"
 "1010" // HOWEVER, we can also add the or operator 
------
"11111" // which will only return a sequence of 1s back to us if the 1s and 0s are truly alternating (combined with the 0s operation above)
// but how do we check if the 1s persist throughout? We can use the n & (n-1) trick 
// n & (n-1) returns 0 if the item is a power of two, so we can just use that with our `1` number, but with n+1 instead 
```

The code is as follows: 

```js
var hasAlternatingBits = function(n) {
    let allOnes = n | (n >> 1); 
    let allZeroes = n & (n >> 1); 
    
    return ((allOnes + 1) & allOnes) === 0 && allZeroes === 0;  
};
```

