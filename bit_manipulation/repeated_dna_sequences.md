## Overview
The brute force approach is to create a hash map, and enumerate all possible 10 chunk slices (also note that we are repeating a lot of work, since we are RE-calculating 9/10 of the same DNA nucleotides). 

One thing I'm noticing is that we only have 4 letters. Hmm....


## Implementation
```js
var findRepeatedDnaSequences = function(s) {
    let res = []; 
    let h = {}; 
    for (let i = 0; i < s.length-9; i++) {
        let temp = s.slice(i, i+10); 
        if (h[temp] === undefined) {
            h[temp] = 1; 
        } else {
            h[temp]++; 
        }
    }
    for (let k in h) {
        if (h[k] > 1) {
            res.push(k); 
        }
    }
    return res; 
};
```

Time complexity: `O(m*n)`, where `m` is the length of each string, and `n` is roughly the length of our input. However, note that we actually have an additional 

## Better Implementation
Had to a watch a video on this, but it was very helpful. Introduced the **rolling hash** method. Since we note that we re mostly recomputing work, in our mind we can think of saving each char `A`, `C`, `G` and `T` and a two bit integer (a `char` has one byte of memory). 

So we can think of creating a hash that looks like the following: 

```js
{
    A: 1, // "00"
    C: 2, // "01"
    G: 3, // "10"
    T: 4 // "11"
}
```

## Better Implementiaton (not 100% correct)

```js
var findRepeatedDnaSequences = function(s) {
    const resultSet = new Set(); 
    const set = new Set(); 
    
    const h = {
        'A': 0, 
        'C': 1, 
        'G': 2, 
        'T': 3 
    }
    
    let num = 0; 
    
    for (let i = 0; i < 10; i++) {
        num += 2**(10-i)*h[s[i]]; 
    }

    for (let i = 10; i <= s.length; i++) {
        if (set.has(num)) {
            resultSet.add(s.slice(i-10, i)); 
        } 
        set.add(num); 
        
        num -= (2**10)*h[s[i-10]]; 
        num *= 2; 
        num += 2*h[s[i]]; 
    }
    return Array.from(resultSet); 
};
```