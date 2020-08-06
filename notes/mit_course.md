




# Lecture 1: Interval Scheduling
How do schedule intervals so most of them occur? 
    1. Shortest? (No.)
    2. Start time? (No.)
```js
            |___|
    |________| |___________|
```

    3. Via incompatible request? (No.)

```js
    |__| |___||__| |__|
      |____||__||____|
      |____|    |____|
      |____|    |____|
```
    4. By end time? (Yes.)

 **Proof**

 Claim: Given a list of intervals `L`, greedy algorithm with earliest finish time produces `k*` intervals, where `k*` is maximum. 

 Induction on `k*`. 

 Revisit: `44:41`. 

# Review 5: Dynamic Programming 


# Lecture 8: Randomization: Universal & Perfect Hashing

**Dictionary problem**: Abstract Data Type (ADT). We want to maintain a dynamic set of items, each item has a key. Want to support 3 operations: 
    * insert(item) : assume key not already there
    * delete(item)
    * search(key) : find item with that key and return

Note: `search(key)` is called an `exact search`, since we learn absolutely nothing if we can't find it. 

**Hashing**: `O(1)` expected time per operation. `O(n)` space. 
    * `u`: # of possible keys
    * `n`: # of keys currently in DS 
    * `m`: # slots in table (each is a pointer to a `LL`)
    * `h`: `{0, 1,..., u-1} -> {0, 1, ..., m-1}`

We have a function that maps each item in `u` to one of our slots `m`. 

**Hashing with chaining**: Achieves `O(1 + alpha)`, where `alpha = n/m`, where `n` is the number of items and `m` is the number of slots. 

**Simple Uniform Hashing**: 

```js
/* 
Pr_(k_1 !== k_2) {h(k_1) = h(k_2)} = 1/m
*/
```

* want to avoid average case analysis (that our inputs are random) => we want to get rid of that assumption 
* Etymology: `hash` (1650s) - cut into small pieces, derives from French word `hacher` (chop up)

### Universal Hashing
**Universal Hashing**: No assumptions about input. 
    * Choose `h` (hash function) randomly from `H`. 
    * Require `H` to be a **universal hash family**: 
```js
/*
        Pr  {h(k) = h(k')} <= 1/m
       h in H
*/
```

**Theorem**: For `n` arbitrary distinct keys, for random `h in H`, where `H` is universal, then the expected number of keys in a slot among those `n` keys is at most `1 + alpha`, where `alpha = n/m`. 

**Perfect Hashing** : guarantee 0 conflicts (only works for static sets - no inserts and deletes)