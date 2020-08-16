## Two Pointer Technique
```js
var twoSum = function(numbers, target) {
    let i = 0; 
    let j = numbers.length-1; 
    
    while (i < j) {
        const temp = numbers[i] + numbers[j]; 
        if (temp < target) {
            i++; 
        } else if (temp > target) {
            j--; 
        } else {
            return [i+1, j+1]; 
        }
    }
};
```



## Binary Search Implementation
```js
var twoSum = function(numbers, target) {
    if (numbers.length === 0) return false; 
    for (let i = 0; i < numbers.length-1; i++) {
        const complement = binarySearch(numbers, i+1, numbers.length-1, target - numbers[i]); 
        if (complement !== -1) {
            return [i+1, complement+1]
        }
    }
};


function binarySearch(arr, i, j, target) {
    if (i > j) return -1; 
    const mid = Math.floor((i + j)/2); 
    
    if (target < arr[mid]) {
        return binarySearch(arr, i, mid-1, target); 
    } else if (target > arr[mid]) {
        return binarySearch(arr, mid+1, j, target); 
    } else {
        return mid; 
    }
}
```

## Complexity
Time: `O(m log n)`
Space: `O(1)`
