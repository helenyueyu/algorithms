## Implementation

```js
var arrangeCoins = function(n) {
    function recursion(start, end) {
        const mid = Math.floor((start + end)/2); 
        if (mid*(mid+1)/2 <= n && (mid+1)*(mid+2)/2 > n) {
            return mid; 
        } else {
            if ((mid+1)*(mid+2)/2 <= n) {
                return recursion(mid+1, end); 
            } else {
                return recursion(start, mid-1); 
            }
        }
    }
    return recursion(1, n); 
};
```

## Complexity
Time: `O(log n)`
Space: `O(log n)` (stack space ?)

## Better Implementation
Note the Gaussian formula `k(k+1)/2 == n`, where `k` represents the total number of rows and `n` represents the number of elements in total. We know that: 

```js
k*(k+1) == 2*n 
k**2 + k == 2*n 

k**2 + k + 1/4 == 2*n + 1/4 
(k + 1/2)**2 = 2*n + 1/4 
k + 1/2 = Math.sqrt(2*n + 1/4)
k = Math.floor(Math.sqrt(2*n + 1/4) - 1/2)
```

We thus, can actually solve this with `O(1)` time and `O(1)` space using the following code: 

```js
var arrangeCoins = function(n) {
    return Math.floor(Math.sqrt(2*n + 1/4) - 1/2); 
};
```