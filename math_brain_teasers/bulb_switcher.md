## Overview
This question is tricky. The key thing to realize is: 

* If you toggle a door an odd number of times, the door will be open. 
* If you toggle a door an even number of times, the door will be closed. 

But how do we know how many times a door is toggled? We know because of the number of factors a number has. We know that door **n** will be toggled for every single one of **n**'s factors. 

Okay. So this boils down to knowing whether an integer has an odd or even number of factors. We know a number has an odd number of factors if the number is a **perfect square**. 

## Implementation
```js
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n)); 
};
```
