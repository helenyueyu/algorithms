## Implementation
```js
var partition = function(s) {
    let res = []; 
    backtrack([], res, 0, s); 
    return res; 
};

function backtrack(curr, res, idx, s) {
    if (idx >= s.length) {
        res.push(curr.slice(0)); 
    }
    for (let j = idx+1; j <= s.length; j++) {
        if (isPalindrome(s.slice(idx, j))) {
            curr.push(s.slice(idx, j)); 
            backtrack(curr, res, j, s); 
            curr.pop(); 
        }
    }
}

function isPalindrome(s) {
    return s === s.split('').reverse().join(''); 
}
```

## Complexity
Time: `O(n^2*2^(n))`

Explanation: String of length `n`, there will be `n-1` places to cut. Each place we there's a decision to cut or not. 

So there is `2^(n-1)` ways to partition the string. 
But for each substring, we have to check if the string is a palindrome, which is another `O(n)`. 

We also have to `.slice()` at the end. 

Space: `O(n^2*2^(n))`
