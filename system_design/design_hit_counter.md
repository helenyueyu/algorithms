## Implementation
```js
var HitCounter = function() {
    this.arr = []; 
};

HitCounter.prototype.hit = function(timestamp) {
    this.arr.push(timestamp); 
};

HitCounter.prototype.getHits = function(timestamp) {
    while (timestamp - this.arr[0] >= 300) {
        this.arr.shift(); 
    }

    return this.arr.length; 
};
```

## Complexity
Time: 

.hit() is `O(1)`
.getHits() is `O(n)`

Space: 

`O(n)`? 