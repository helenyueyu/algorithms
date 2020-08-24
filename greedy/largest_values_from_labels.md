## Implementation
```js
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    
    let sum = 0; 
    let count = 0; 
    
    const pairs = []; 
    const h = {}; 
    
    for (let i = 0; i < values.length; i++) {
        pairs.push([values[i], labels[i]]); 
    }
    pairs.sort((a,b) => b[0] - a[0]); 
    let i = 0; 
    while (i < pairs.length && count < num_wanted) {
        const [value, label] = pairs[i]; 
        if (h[label] === undefined) h[label] = 0; 
        h[label]++; 
        if (h[label] <= use_limit) {
            sum += value; 
            count++; 
        }
        i++; 
    }

    
    return sum; 
};
```

## Complexity
Time: `O(n log n)`
Space: `O(n)`
