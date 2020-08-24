## Implementation
```js
var solveNQueens = function(n) {
    const res = []; 
    
    const colsTaken = []; 
    
    function backtrack(curr, colsTaken) {
        if (curr.length > n) return; 
        if (curr.length === n) {
            res.push(curr.slice(0)); 
        } 
        for (let j = 0; j < n; j++) {
            
            if (colsTaken.length > 0) {
                let m = colsTaken.length; 
                
                if (colsTaken.includes(j)) continue;
                let flag = true; 
                for (let i = m-1; i >= 0; i--) {
                    if (colsTaken[i] === j-(m-i) || colsTaken[i] === j+(m-i)) {
                        flag = false; 
                    }
                }
                if (flag === false) continue; 
            }
 
            curr.push(j); 
            colsTaken.push(j); // { 0,}
            backtrack(curr, colsTaken); 
            colsTaken.pop(); 
            curr.pop(); 
        }
    }
    
    backtrack([], colsTaken); 

    return res.map(combination => combination.map(x => generate(x, n))); 
};

function generate(idx, n) {
    let res = ""; 
    for (let i = 0; i < n; i++) {
        res += i === idx ? 'Q' : '.'; 
    }
    return res; 
}
```
