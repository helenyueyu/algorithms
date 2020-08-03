Given an array of `n` **distinct** numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array. 

```js
function missingNumber(nums) {
    let res = 0; 
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]; 
    }
    for (let i = 0; i <= nums.length; i++) {
        res ^= i; 
    }
    return res; 
}
```

We **bitwise** `XOR` every single number in the array. Then we enumerate and `XOR` every single number from `0` to `n`. This means that every single number must be repeated twice (which bitwise `XOR` will cancel out and return 0), except for one. That is the one we return. 

Time: `O(n)`, where `n` is the number of integers `0..n`
Space: `O(1)`