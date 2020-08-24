## Implementation
```js
var solve = function(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i*j === 0 || i === board.length-1 || j === board[0].length-1) {
                if (board[i][j] === 'O') {
                    const visited = new Set(); 
                    dfs(board, i, j, visited); 
                }
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O') {
                dfs2(board, i, j);  
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== 'X') board[i][j] = 'O'; 
        }
    }
};

function dfs2(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 'O') {
        return; 
    }
    grid[i][j] = 'X'; 
    dfs2(grid, i-1, j); 
    dfs2(grid, i+1, j); 
    dfs2(grid, i, j-1);
    dfs2(grid, i, j+1); 
}

function dfs(grid, i, j, visited) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'X' || visited.has(`${i}_${j}`)) {
        return; 
    }
    visited.add(`${i}_${j}`); 
    grid[i][j] = 'E'; 
    dfs(grid, i-1, j, visited); 
    dfs(grid, i+1, j, visited); 
    dfs(grid, i, j-1, visited); 
    dfs(grid, i, j+1, visited); 
}
```