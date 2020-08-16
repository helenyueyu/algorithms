## Implementation
```js
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === nums[i]) continue; 
        while (i !== nums[i]) {
            if (nums[i] === nums[nums[i]]) return nums[i]; 
            swap(nums, i, nums[i]); 
        }
        return nums[i];
    }
};

function swap(arr, i, j) {
    let temp = arr[i]; 
    arr[i] = arr[j]; 
    arr[j] = temp; 
}
```

## Complexity
Time: `O(n)`
Space: `O(1)`
