## Overview
When we find a `mid` that works, we can't just immediately return it, since we need to find the **first** index that works (clarify with interviewer if that's what they want). So what we do is we create a `step` variable. 

* If we can "safely" step to that index, and still satisfy the magic index property, we do so. 
* Otherwise, we try halving the step size and trying again. 

## Implementation
```js
var fixedPoint = function(A, s=0, e=A.length-1) {
    if (s > e) return -1; 
    let mid = Math.floor((s + e)/2); 
    if (mid < A[mid]) {
        return fixedPoint(A, s, mid-1); 
    } else if (mid > A[mid]) {
        return fixedPoint(A, mid+1, e); 
    } else {
        let step = mid; 
        while (mid-1 === A[mid-1]) {
            if (mid-step === A[mid-step]) {
                mid -= step; 
            } else {
                step = Math.floor(step/2); 
            }
        }
        return mid; 
    }
};
```

## Complexity
Time: `O(log n)`
Space: `O(1)`
