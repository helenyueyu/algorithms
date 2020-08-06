## Overview 
We can use heaps to solve this problem. 

Note: Time complexity is upper bounded by the total number of unique characters we have in the string. E.g. Do we only have lower case letters? Or are we limited to ASCII? Or Unicode? 

* Iterate through the string once to create a frequency hash. Time: `O(n)`
* Iterate through the frequency hash to create nodes. This will be at MOST `O(n)` times, if we have characters. 
    * For each node, we are going to insert the node into the max heap (where nodes are sorted by their frequency property). 
    * Insertion into a heap takes `log(n)` time. 

* Once all `n` nodes have been inserted, we need to go back into our heap and remove each node. The time complexity for removing each node takes `log(n)` time. 

## Implementation

```js
var frequencySort = function(s) {
    let h = {}; 
    for (let i = 0; i < s.length; i++) {
        if (h[s[i]] === undefined) {
            h[s[i]] = 1; 
        } else {
            h[s[i]]++; 
        }
    }
    const mh = new Heap(compareByFreq); 
    for (let k in h) {
        mh.insert(new Node(k, h[k])); 
    }
    let res = ""; 
    while (res.length < s.length) {
        let removedNode = mh.remove(); 
        res += repeat(removedNode.val, removedNode.freq); 
    }
    return res; 
};

function repeat(s, n) {
    let res = ""; 
    for (let i = 1; i <= n; i++) {
        res += s; 
    }
    return res; 
}

function Node(val, freq) {
    this.val = val; 
    this.freq = freq; 
}

class Heap {
    constructor(comparator) {
        this.arr = []; 
        this.comparator = comparator; 
    }
    
    insert(el) {
        this.arr.push(el); 
        this.siftUp(this.arr.length-1); 
    }
    
    siftUp(idx) {
        let parentIdx = Math.floor((idx-1)/2); 
        if (parentIdx < 0) return; 
        
        if (this.comparator(this.arr[parentIdx], this.arr[idx]) > 0) {
            [this.arr[parentIdx], this.arr[idx]] = [this.arr[idx], this.arr[parentIdx]]; 
            this.siftUp(parentIdx); 
        }
    }
    
    remove() {
        let removedEl = this.arr[0]; 
        this.arr[0] = this.arr.pop(); 
        this.siftDown(0); 
        return removedEl; 
    }
    
    siftDown(idx) {
        if (this.arr[idx] === undefined) return; 
        
        let leftChildIdx = 2*idx + 1; 
        let rightChildIdx = 2*idx + 2; 
        
        let leftChild = this.arr[leftChildIdx]; 
        let rightChild = this.arr[rightChildIdx]; 
        
        let swapIdx; 
        
        if (leftChild === undefined && rightChild === undefined) {
            return; 
        } else if (leftChild !== undefined && rightChild !== undefined) {
            if (this.comparator(leftChild, rightChild) > 0) {
                swapIdx = rightChildIdx; 
            } else {
                swapIdx = leftChildIdx; 
            }
        } else {
            if (leftChild) {
                swapIdx = leftChildIdx; 
            } else {
                swapIdx = rightChildIdx; 
            }
        }
        
        if (this.comparator(this.arr[idx], this.arr[swapIdx]) > 0) {
            [this.arr[idx], this.arr[swapIdx]] = [this.arr[swapIdx], this.arr[idx]]; 
            this.siftDown(swapIdx); 
        }
    }
}

function compareByFreq(nodeA, nodeB) {
    return nodeA.freq < nodeB.freq ? 1 : -1; 
}
```

## Complexity
Time: `O(n log n)`
Space: `O(n)`, since we need to store the heap. 