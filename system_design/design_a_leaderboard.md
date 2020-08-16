## Implementation
```js
var Leaderboard = function() {
    this.h = {}; 
};

Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.h[playerId] === undefined) {
        this.h[playerId] = score; 
    } else {
        this.h[playerId] += score; 
    }
};

Leaderboard.prototype.top = function(K) {
    let scores = Object.values(this.h).sort((a, b) => a < b ? 1 : -1); 
    return scores.slice(0, K).reduce((a,b) => a + b); 
};

Leaderboard.prototype.reset = function(playerId) {
    delete this.h[playerId]; 
};

```

## Complexity
Time: 
    1. `addScore`: `O(1)`
    2. `top`: `O(n log n)`
    3. `reset`: `O(1)`

## Note
We can improve the `top` function into `O(n log k)` flexibility (`k <= n`), by creating a **priority queue**, which we can create using a **heap**. 