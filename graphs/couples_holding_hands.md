## Overview

Note: This is a variation of the **1--N** integers problem. 

Suppose we have an integer array containing numbers `0` to `N-1` but in random order. We can choose any two numbers and swap. What is the minimum number of swaps needed so that `i === array[i]` for `0 <= i <= N-1` (or equivalently, sort). 

We apply the `N` into cyclic groups, where the indices each form a cycle: `i_0 -> i_1 -> ... -> i_0`. 


```js
row: 2, 3, 1, 0, 5, 4
idx: 0, 1, 2, 3, 4, 5
```

The element at index `0`'s rightful place is at index `2`. 
The element at index `1`'s rightful place is at index `3`. 
The element at index `2`'s rightful place is at index `1`. 
The element at index `3`'s rightful place is at index `0`. 
The element at index `4`'s rightful place is at index `5`.
The element at index `5`'s rightful place is at index `4`. 

We have two cyclic groups: 

`0 -> 2 -> 1 -> 3 -> 0` and `4 -> 5 -> 4`. 

To build a cyclic group, we take an unvisited index `i_0`, and we find `i_1`, the index in which `i_0` is supposed to appear, or `arr[i_1] = i_0`. We then find `i_2`, the index in which `i_1` is supposed to appear, or `arr[i_2] = i_1`. We keep going until we have some cycle `i_0 -> i_1 -> ... -> i_k -> i_0`. 

Two observations: 

1. Eventually the list will repeat itself. 
2. The list will repeat itself at index `i_0`. 

Two lemmas? 

1. Each cyclic group is **mutually exclusive**. 
2. The min number of swaps to resolve a cyclic group of size `k` is `k-1`. 


The minimum number of swaps needed to resolve the whole array equals the minimum number of swaps needed to resolve each of the index groups. 