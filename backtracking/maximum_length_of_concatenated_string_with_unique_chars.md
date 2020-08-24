## Implementation
```js
function notUnique(word) {
    let uniqueChars = new Set(word.split('')); 
    return uniqueChars.size < word.length; 
}

var maxLength = function(arr) {
    const res = []; 
    

    function backtrack(curr, res, idx) {
        let impossible = true; 
        for (let i = idx; i < arr.length; i++) {
            let candidate = arr[i]; 
            let isPossible = true; 
            if (notUnique(candidate)) {
                isPossible = false; 
            }
            for (let j = 0; j < candidate.length; j++) {
                if (curr.includes(candidate[j])) {
                    isPossible = false; 
                    break; 
                }
            }
            if (!isPossible) {
                continue; 
            } else {
                impossible = false; 
                backtrack(curr + candidate, res, i+1); 
            }
        }
        if (impossible === true) {
            res.push(curr.slice(0)); 
            return; 
        }
    }
    backtrack("", res, 0);
    return Math.max(...res.map(x => x.length)); 
};
```