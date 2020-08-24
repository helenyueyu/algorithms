## Implementation
```js
var Solution = function(nums) {
    this.arr = nums; 
};

Solution.prototype.reset = function() {
    return this.arr;  
};

Solution.prototype.shuffle = function() {
    let nums = this.arr.slice(0); 
    let n = nums.length; 
    
    for (let i = 0; i < n; i++) {
        let randIdx = Math.floor(Math.random() * n); 
        [nums[i], nums[randIdx]] = [nums[randIdx], nums[i]]; 
    }
    return nums; 
};
```

## Complexity
Time: `O(n)`
