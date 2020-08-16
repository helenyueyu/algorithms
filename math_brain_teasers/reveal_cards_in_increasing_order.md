## Overview
This is one of those questions where I had an **aha!** moment. 

At first, one obvious pattern is maybe you can go through in pairs, or quadruplets, fixing every other one in some sort of increasing sequence...then I thought, maybe we can take the solution (the already sorted array), and see if we can **build it back up** to the original array. 

Along the way, I noticed a pattern...and just went with the pattern!


## Implementation
```js
/* 
[2, 13, 3, 11, 5, 17, 7]
[13, 3, 11, 5, 17, 7]   - 2 is revealed 
[3, 11, 5, 17, 7, 13] - 13 gets put on the bottom
[11, 5, 17, 7, 13] - 3 is revealed 
[5, 17, 7, 13, 11] - 11 gets put on the bottom
[17, 7, 13, 11] - 5 is revealed
[7, 13, 11, 17] - 17 gets put on the bottom
[13, 11, 17] - 7 is revealed
[11, 17, 13] - 13 gets put on the bottom
[17, 13] - 11 is revealed
[13, 17] - 17 gets put on the bottom
[17] - 13 is revealed
[17] - 17 gets put on the bottom
[] - 17 is revealed 

sensing a pattern here: 
    * starting from index 0 -> we have an increasing subsequence every odd
    
sort the cards in asc order 
    * start putting the cards down - we'll place them in 2nds first 
    * once we reach the end of the deck, we'll place 
    
reverse engineer maybe? 
[2, 3, 5, 7, 11, 13, 17]


the order in which we insert is in reverse order 

[2, 13, 3, 11, 5, 17, 7]
[3, 11, 5, 17, 7, 13]
[5, 17, 7, 13, 11]
[7, 13, 11, 17] // move last element to the front before adding 
[11, 17, 13] // move last element to the front before adding  
[13, 17] // move the last element the front, before adding 
[17] 
*/

var deckRevealedIncreasing = function(deck) {
    if (deck.length === 0) return []; 
    
    deck = deck.sort((a,b) => a < b ? -1 : 1); 
    
    const last = deck.pop(); 
    let res = [last]; 
    
    while (deck.length > 0) {
        res.unshift(res.pop()); 
        res = [deck.pop()].concat(res); 
    }
    
    return res; 
};
```

## Complexity
Time: `O(n log n)` because of the sorting. 

Note: It seems like it might be `O(n^2)` because we have an `unshift` operation inside of a `while` loop, but note that `deck` is shrinking...(maybe it is `O(n^2)`...? Revisit.)

Space: `O(n)` to store the result. 