## Implementation
```js
var queensAttacktheKing = function(queens, king) {
    const res = []; 
    
    const DIRS = [
        [-1, -1], 
        [-1, 0], 
        [-1, 1], 
        [0, -1], 
        [0, 1], 
        [1, -1], 
        [1, 0], 
        [1, 1]
    ]
    const matrix = new Array(8).fill().map(() => new Array(8).fill(0)); 
    
    const [r, c] = king; 
    matrix[r][c] = 'K'; 
    
    for (let i = 0; i < queens.length; i++) {
        const [r, c] = queens[i]; 
        matrix[r][c] = 'Q'; 
    }
    
    for (let dir of DIRS) {
        let [x,y] = king; 
        while (inBounds(x, y)) {
            if (matrix[x][y] === 'Q') {
                res.push([x, y]); 
                break; 
            }
            x += dir[0]; 
            y += dir[1]; 
        }
    }
    
    return res; 
};

function inBounds(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8; 
}

```

## Complexity
Time: `O(n)`
Space: `O(1)`