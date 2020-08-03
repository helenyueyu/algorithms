Let's examine the time complexities for the following data structures: 

Invented by `William Pugh (1989)`. 

1. Sorted Linked List: `O(n)`
2. Balanced BST: `O(log n)`
3. Sorted Array: `O(log n)` (binary search)

A **skip list** is a simple, randomized search structure that will give us `O(log n)` expectation for `search`, `insert`, and `delete`, but also with high probability. 

A **skip list** maintains a dynamic set of `n` elements in `O(log n)` time per operation (with high probability, not just in expectation). 

Idea: Go to express lane as many stops as possible. When you can't go further, drop down to the local line and keep walking until you reach your destination. 

