## Implementation

**Brute Force**
`O(n^3)`

```js
var numTeams = function(rating) {
    let count = 0; 
    
    for (let i = 0; i < rating.length-2; i++) {
        for (let j = i+1; j < rating.length-1; j++) {
            for (let k = j+1; k < rating.length; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k]) {
                    count++; 
                }
                if (rating[i] > rating[j] && rating[j] > rating[k]) {
                    count++; 
                }
            }
        }
    }
    return count; 
};
```