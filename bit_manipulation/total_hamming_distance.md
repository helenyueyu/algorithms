## Overview

The brute force, with time complexity `O(n^2)`. 

## Implementation
```js
var totalHammingDistance = function(nums) {
    if (nums.length <= 1) return 0; 
    let count = 0; 
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let xor_num = nums[i] ^ nums[j]; 
            while (xor_num > 0) {
                xor_num = xor_num & (xor_num - 1); 
                count++; 
            }
        }
    }
    return count; 
};
```

## Better Implementation
What if we examined one bit at a time. Let's take the **least significant bit** for each number in our array. How much does this **least significant bit** contribute to our total Hamming distance? We can think of this as: 

```js
(LSB(a_1) ^ LSB(a_2)) + (LSB(a_1) ^ LSB(a_2)) + ... + (LSB(a_2)^LSB(a_3)) ...
```

However, one thing to note is that when `LSB(a_1)` and `LSB(a_2)` are of the same type (e.g. either both `0` or both `1`), their difference doesn't affect anything. So we only really care about the pairs where either `LSB(a_i) === 1` and `LSB(a_j) === 0`, or vice versa. 

And how do we know how many pairs of different types of LSB are there? Well, if we have `m` numbers where the `LSB` is `1`, and `n` numbers where the `LSB` is `0`, we can simply multiply them, `m*n` to grab all the possible changes. More specifically though, we actually know that we can do `n*(n-k)`, since all numbers must fall into one of two mutually exclusive categories. 

The code: 

## Implementation
```js
var totalHammingDistance = function(nums) {
    let distance = 0; 
    let n = nums.length; 
    
    for (let i = 0; i < 32; i++) {
        let oneLSB = 0;
        for (let j = 0; j < n; j++) { 
            oneLSB += nums[j] & 1; 
            nums[j] = nums[j] >> 1; 
        }
        distance += oneLSB * (n - oneLSB); 
    }
    return distance; 
};
```