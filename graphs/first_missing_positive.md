## Overview
Iterate from left to right in our input array => number: arr[idx]

* if number is idx + 1, continue 
* else 
    * while number !== idx + 1 AND number !== -1
        * if number < 1 OR > arr.length => arr[idx] = -1 
    * else
        * if arr[idx] !== arr[arr[idx]-1] 
            => swap 
        * else arr[idx] === arr[arr[idx]-1] 
            => arr[idx] = -1 
* loop through mutated input array 
    * if exits -1 return (first index of -1) + 1
    * else return arr.length + 1 

## Implementation
```js
function firstMissingPositive(arr) {
	let i = 0; 
	while (i < arr.length) {
		while (arr[i] !== i+1 && arr[i] !== -1) {
			if (arr[i] < 1 || arr[i] > arr.length) arr[i] = -1; 
			else {
				let swapIdx = arr[i]-1;  
				if (arr[i] !== arr[swapIdx]) {
					[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]; 
				} else {
					arr[i] = -1; 
				}; 
			}
		}
        i++; 
	}; 
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === -1) return i+1; 
	}
    return arr.length+1; 
}
```

## Complexity
Time: `O(n)`
Space: `O(1)`
