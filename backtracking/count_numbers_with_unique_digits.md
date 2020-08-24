## Implementation
```js
var countNumbersWithUniqueDigits = function(n) {
    let count = 0; 
    function backtrack(curr, n) {
        if (curr.length <= n) {
            count++; 
        } else {
            return; 
        }
        
        let digits = '0123456789'; 
        for (let i = 0; i < digits.length; i++) {
            if (curr === "" && digits[i] === "0") continue; 
            if (!curr.includes(digits[i])) {
                backtrack(curr + digits[i], n); 
            }
        }
    }
    backtrack("", n); 
    return count; 
};
```