## Implementation
```js
var search = function(nums, target) {
    return bSearch(nums, target, 0, nums.length-1); 
};

function bSearch(nums, target, i, j) {
    if (i > j) return false; 
    let mid = i + Math.floor((j-i)/2);
    if (target === nums[mid]) {
        return true; 
    } else {
        if (nums[i] > nums[mid]) {
            if (target <= nums[mid] || target >= nums[i]) {
                return bSearch(nums, target, i, mid-1); 
            } else {
                return bSearch(nums, target, mid+1, j); 
            }
        } else {
            if (target >= nums[i] && target < nums[mid]) {
                return bSearch(nums, target, i, mid-1); 
            } else {
                return bSearch(nums, target, mid+1, j); 
            }
        }
    }
}

```