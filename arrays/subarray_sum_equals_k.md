## Implementation
```js
function subarraySum(arr, k) {
	let count = 0; // 1
	let i = 0; 
	let j = 0; 

	let temp = arr[0]; 
	while (i < arr.length) {
		while (j < arr.length) {
            if (temp === k) count++; 
			j++; 
            temp += arr[j];
			if (arr[j] === undefined) break; 
		}
		i++; 
		temp = arr[i]; 
		j = i; 
	}

	return count; 
}
```