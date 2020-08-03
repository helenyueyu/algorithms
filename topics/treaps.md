Treaps: randomized algorithms. 

Randomized Reduction - Brian C Dean


Randomized binary search tree: 
    * permute the elements
    * construct the tree
    * avoids likelihood of `O(n)` linked-list type trees


Goal: construct random `BST`
    * Cartesian Trees: Think of `(x,y)` points 
    * Treaps: `tree` + `heap`


Definition: A **treap** is a binary tree, where every node has a: 
    1. `search key`
    2. `priority`
where the **inorder** sequence of search keys is sorted and each node's priority is smaller than the priorities of its children. 

Note: Structure of **treap** is thus completely deterministic. 



