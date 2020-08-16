## Implementation
```js
var oddEvenList = function(head) {
    if (!head || !head.next) return head; 
    
    let fHead = head; 
    let sHead = head.next; 

    
    while (head && head.next) {
        let next = head.next; 
        head.next = head.next.next; 
        head = next; 
        
    }
    head = fHead; 
    while (head.next) {
        head = head.next; 
    }
    head.next = sHead; 
    return fHead; 
};
```

## Complexity
Time: `O(n)`
Space: `O(1)`