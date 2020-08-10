## Implementation
```js
var kSimilarity = function(A, B) {
    const visited = new Set(); 
    
    let q = [[A, 0]]; 
    
    while (q.length > 0) {
        const [str, swaps] = q.shift(); 
        if (visited.has(str)) continue;
        if (str === B) return swaps; 
        visited.add(str);
        let i = 0; 
        while (str[i] === B[i]) i++; 
        for (let j = i+1; j < B.length; j++) {
            if (str[j] !== B[j] && str[j] === B[i]) {
                let temp = swap(str, i, j); 
                q.push([temp, swaps + 1]); 
            }
            
        }
        
        
    }
    return -1; 
};

function swap(str, i, j) {
    str = str.split(''); 
    [str[i], str[j]] = [str[j], str[i]]; 
    return str.join(''); 
}
```

## Complexity
What is the upper bound for the maximum number of swaps? 
