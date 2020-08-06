## Overview
Using dynamic programming, how can this problem be solved? 

dp matrix of boolean values 
dp[i][j] : solution to does s[0..i] and p[0..j] match? 

str will always be a lower case letter 

pattern (p[j]) can either be: 
    * a letter
        > dp[i][j] = s[i] === p[j] && dp[i-1][j-1]
    * a '?'
        > dp[i][j] = dp[i-1][j-1] (p[j] matches w/ anything)
    * a '*'
        > '*' can match nothing (represented by dp[i][j-1])
            e.g. "abcd"
                 "abcd*"
        > '*' can match one letter (dp[i-1][j])
            e.g. "abcd"
                 "abc*"

## Implementation
```js
var isMatch = function(s, p) {
    s = " " + s; 
    p = " " + p; 
    
    const dp = new Array(s.length).fill()
                    .map(() => new Array(p.length)); 
    
    dp[0][0] = true; 
    
    for (let i = 1; i < s.length; i++) {
        dp[i][0] = false; 
    }
    
    for (let j = 1; j < p.length; j++) {
        dp[0][j] = dp[0][j-1] === true && p[j] === '*' ? true : false; 
    }
    
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (p[j] === '?') {
                dp[i][j] = dp[i-1][j-1]; 
            } else if (p[j] === '*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1]; 
            } else {
                dp[i][j] = dp[i-1][j-1] && s[i] === p[j]; 
            }
        }
    }
    
    return dp[dp.length-1][dp[0].length-1]
};
```

## Complexity
Time: `O(m*n)`, where `m` is the length of the string and `p` is the length of the pattern. 
Space: `O(m*n)`. 