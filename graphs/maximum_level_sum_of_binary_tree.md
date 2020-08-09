## Implementation

### DFS Implementation
```js
var maxLevelSum = function(root) {
    const levels = [];  
    
    dfs(root, levels, 0);
    
    let maxLevel = null; 
    let maxSum = 0; 
    
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] > maxSum) {
            maxSum = levels[i]; 
            maxLevel = i; 
        }
    }
    
    return maxLevel + 1; 
};

function dfs(root, levels, level) {
    if (!root) return; 
    if (levels[level] === undefined) {
        levels[level] = root.val;
    } else {
        levels[level] += root.val; 
    }
    dfs(root.left, levels, level+1); 
    dfs(root.right, levels, level+1); 
}
```

### BFS Implementation
```js
var maxLevelSum = function(root) {
    let maxSum = 0; 
    let maxLevel = 0; 
    
    let currLevel = 1; 
    let currSum = 0; 
    
    const q = [[root, 1]]; 
    
    while (q.length > 0) {
        const [node, level] = q.shift(); 
        if (!node) continue; 
        
        if (level === currLevel) {
            currSum += node.val; 
        } else {
            if (currSum > maxSum) {
                maxSum = currSum; 
                maxLevel = currLevel; 
            }
            currSum = node.val; 
            currLevel = level; 
        }
        q.push([node.left, level + 1]); 
        q.push([node.right, level + 1]); 
    }
    
    return maxLevel; 
};
```

## Complexity
Time: `O(n)`, since we process each node in our tree once. 
Space: `O(n)`, since that is the most number of nodes we can have in our queue at a given point in time. 