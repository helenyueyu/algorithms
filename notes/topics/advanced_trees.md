### Red-Black Trees

A **red-black tree** is a **binary search tree** with the following properties: 

1. Each node is either **red** or **black**. 
2. Root is **black**. 
3. No red node has a red child. 
4. Every path from the **root** to a **leaf** has the same number of **black** nodes. 

Theorem: Any **red-black tree** has a height of `O(log n)`. 

Good: Can **get** and **modify** nodes in `O(log n)` time. 
Bad: In order to preserve the properties of **red-black trees**, there are lots of rules to memorize. 


### Multiway Search Tree

* In a **normal binary search** tree, each node stores a **single** key. The key splits the space into two halves (like the `mid` in our `bSearch`). 
* In a **multiway search tree**, each node stores an **arbitrary** number of **sorted** keys. 
    * Keys are **in order**. 
    * `n` keys divides the state space into `n+1` chunks. 

In general, it is easier to build a balanced **multiway search tree**, then it is to build a **balanced BST**, since we can always just add another key to any node (at any level). But if we keep adding keys and our nodes grow too big, we need to figure out how to shrink the node. 

1. Either add new keys below a node (not optimal). 
2. Split the node into halves, `kicking up` a key (optimal). 


### B Tree
A **B tree of order b** is a special **multiway search tree** where: 

1. Each node has roughly between `b` and `2b` keys, except the root, which may have b/w `1` and `2b` keys. 


