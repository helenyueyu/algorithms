## Implementation
```js
var maxProduct = function(words) {
    let max = 0; 
    for (let i = 0; i < words.length-1; i++) {
        for (let j = i+1; j < words.length; j++) {
            if (noCommonLetters(words[i], words[j])) {
                max = Math.max(max, words[i].length * words[j].length); 
            }
        }
    }
    return max; 
};

function noCommonLetters(w1, w2) {
    const s = new Set(w2.split('')); 
    for (let i = 0; i < w1.length; i++) {
        if (s.has(w1[i])) return false; 
    }
    return true; 
}
```
## Complexity
Time: `O(n^2*k)`, where `n` is the length of the input array and `k` is the length of the longest word. 
Space: `O(1)`