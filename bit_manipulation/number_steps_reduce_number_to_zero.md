## Idea
How do we know the current number is even
    * current number is even if the last bit isn't a 1 
If the current number is even, what happens when you divide by 2?
    * bitwise shift to the right 
If the current number is odd, what happens when you subtract 1? 
    * last digit becomes 0 

Using these facts, we can proceed to code it out: 

## Implementation
```js
var numberOfSteps  = function(num) {
    let count = 0; 
    while (num > 0) {
        if (num & 1 === 1) {
            num--; 
        } else {
            num = num >> 1; 
        }
        count++; 
    }
    return count; 
};
```

## Complexity 
Time: `O(log n)`, since we halving our number every 2nd step. 
Space: `O(1)` 


## A Different Approach
Another way of thinking about this problem is that: 

    * It takes one step to remove a 0 (bitwise shift to the right)
    * It takes two steps to remove a 1 (transform it into a 0 by subtracting one, then bitwise shifting to the right)
        * Note: This is WITH EXCEPTION to the leftmost 1, since by the time we change it to a 0, we are done and we don't need to do any bitwise shifting. 


```js
var numberOfSteps  = function(num) {
    let count = 0; 
    const str = (num).toString(2); 
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++; 
        } else {
            count += 2; 
        }
    }
    
    return count-1; 
};
```