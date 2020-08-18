## Implementation
```js
var serialize = function(root) {
    if (!root) return ""; 
    return `${root.val}(${serialize(root.left)})(${serialize(root.right)})`;  
};

var deserialize = function(data) {
    if (data === "") return null;
    let j = 0; 
    while (data[j] !== '(') {
        j++; 
    }
    const root = new TreeNode(data.slice(0, j)); 
    
    let count = 0; 
    let i = j; 
    while (i < data.length) {
        if (data[i] === '(') count++; 
        if (data[i] === ")") count--; 
        if (count === 0) break; 
        i++; 
    }
    

    let l = data.slice(j+1, i); 
    let r = data.slice(i+2, data.length-1); 
    
    root.left = deserialize(l); 
    root.right = deserialize(r); 
    return root; 
};
```