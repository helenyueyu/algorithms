## Implementation
```js
var countPairs = function(root, k) {
	if (!root) return 0; 

	let count = 0; 
	
	function recursion(root, k) { // root = 1
		if (!root) return []; 
        if (!root.left && !root.right) return [0]; 

        let left = recursion(root.left, k); // [1] 
        let right = recursion(root.right, k); // [0] 

        let combo = []; 

        for (let i = 0; i < left.length; i++) {
            for (let j = 0; j < right.length; j++) {		
                if ((1 + left[i]) + (1 + right[j]) <= k) {
                    count++; 
                }
            }
        }

        for (let i = 0; i < left.length; i++) {
            if (1 + left[i] < k) combo.push(1 + left[i]);  
        }

        for (let i = 0; i < right.length; i++) {
            if (1 + right[i] < k) combo.push(1 + right[i]);  
        }

        return combo; 
    }
    recursion(root, k); 
    return count; 
}; 

```