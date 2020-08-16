## Overview
Sort of similar to the **rolling hash** implementation, but we keep a `start` and an `end` frequency hash, representing the left and the right partitions of a string. Initially, our `end` hash starts off with all the letters in our string (we will move letters one by one from one hash to another). 

Our `startCount` and `endCount` variables store the total number of unique characters in the left and right partitions, respectively. 

Whenever we encounter a letter that we've never seen before in our `start` hash, we increment `startCount` by 1 (we've introduced a new character in the left partition). When we've decremented a frequency in our `end` hash such that the frequency of a letter is 0, we remove that element from our hash (not strictly necessary) and decrement our `endCount` by 1, to signal losing one character on the right partition. 

## Implementation
```js
var numSplits = function(s) {
    let count = 0; 
    
    let startCount = 0; 
    let endCount = 0; 
        
    const start = {}; 
    const end = {};
    
    for (let i = 0; i < s.length; i++) {
        if (end[s[i]] === undefined) {
            end[s[i]] = 1; 
            endCount++; 
        } else {
            end[s[i]]++; 
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (start[s[i]] === undefined) {
            start[s[i]] = 1; 
            startCount++; 
        } else {
            start[s[i]]++; 
        }
        
        end[s[i]]--; 
        if (end[s[i]] === 0) {
            delete end[s[i]]; 
            endCount--; 
        }
        
        if (startCount === endCount) count++; 
    }
    
    return count; 
};

```

## Complexity
Time: `O(n)` - We need to iterate through every single character once to create our `end` hash. Then we iterate through every single character to spill elements from one bucket to another. 

Space: `O(n)` - we have to store at most `k` key value pairs, where `k` is the number of unique characters in string `s`, for both our `start` and our `end` hashes. 