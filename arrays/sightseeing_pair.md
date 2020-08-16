## Immplementation
**Brute Force**

```js
var maxScoreSightseeingPair = function(A) {
    let max = -Infinity; 
    
    for (let i = 0; i < A.length-1; i++) {
        for (let j = i+1; j < A.length; j++) {
            let curr = A[i] + A[j] - (j-i); 
            max = Math.max(max, curr); 
        }
    }
    return max; 
};
```