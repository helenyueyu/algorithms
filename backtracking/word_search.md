## Implementation
```js
var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(board, i, j, word, 0)) {
                return true; 
            }
        }
    }
    return false; 
};

function dfs(board, i, j, word, idx) {
    if (idx === word.length) return true; 
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === '*') {
        return; 
    } else {
        if (board[i][j] === word[idx]) {
            let letter = board[i][j]; 
            board[i][j] = '*'; 
            let f1 = dfs(board, i-1, j, word, idx+1); 
            let f2 = dfs(board, i+1, j, word, idx+1); 
            let f3 = dfs(board, i, j-1, word, idx+1); 
            let f4 = dfs(board, i, j+1, word, idx+1); 
            if (f1 || f2 || f3 || f4) return true; 
            board[i][j] = letter; 
        } else {
            return false; 
        }
    }
}
```