## Overview
We want to combine the best of both worlds with **hashes** and **arrays**, since a **hash** gives us `O(1)` insertion and deletion, but an **array** gives us `O(1)` get random. The tricky thing is **deleting** an element that's in the interior of the array is a little bit tricky and time consuming....but aha! We can just swap it with the last element in the array. 

## Implementation
```js
var RandomizedSet = function() {
    this.h = {}; 
    this.arr = []; 
};

RandomizedSet.prototype.insert = function(val) {
    if (this.h[val] !== undefined) {
        return false; 
    } else {
        this.arr.push(val); 
        this.h[val] = this.arr.length-1; 
        return true; 
    }
};

RandomizedSet.prototype.remove = function(val) {
    if (this.h[val] === undefined) {
        return false; 
    } else {
        let removeIdx = this.h[val]; 
        let lastEl = this.arr[this.arr.length-1]; 
        
        this.h[lastEl] = removeIdx; 
        
        [this.arr[removeIdx], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[removeIdx]]; 
        
        this.arr.pop(); 
        delete this.h[val]; 
        return true; 
    }
};

RandomizedSet.prototype.getRandom = function() {
    let randIdx = Math.floor(Math.random()*this.arr.length); 
    return this.arr[randIdx]; 
};

```

## Time Complexity
Insert: `O(1)`
Delete: `O(1)`
GetRandom: `O(1)`
