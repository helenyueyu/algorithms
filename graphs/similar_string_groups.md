## Implementation


## Union Find w/o Rank 
```js
function numSimilarGroups(A) {
    const n = A.length; 
    let uf = new UnionFind(n); 

    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            if (isSimilar(A[i], A[j])) uf.union(i, j); 
        }
    }

    return uf.size(); 
}

function isSimilar(str1, str2) {
    let diff = 0; 
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++; 
    }
    return diff <= 2; 
}

class UnionFind {
    constructor(n) {
        this.p = new Array(n); 
        for (let i = 0; i < n; i++) this.p[i] = i; 
        this.num = n; 
    }

    find(idx) {
        if (this.p[idx] !== idx) {
            this.p[idx] = this.find(this.p[idx]); 
        } 
        return this.p[idx];  
    }

    union(i, j) {
        const pi = this.find(i); 
        const pj = this.find(j); 
        if (pi !== pj) {
            this.p[pi] = pj;
            this.num--; 
        }
    }

    size(){
        return this.num; 
    }
}
```

## Try with Union Find with Rank 
```js
function numSimilarGroups(A) {
    const n = A.length; 
    let uf = new UnionFind(n); 

    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            if (isSimilar(A[i], A[j])) uf.union(i, j); 
        }
    }

    return uf.size(); 
}

function isSimilar(str1, str2) {
    let diff = 0; 
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++; 
    }
    return diff <= 2; 
}

class UnionFind {
    constructor(n) {
        this.p = new Array(n); 
        for (let i = 0; i < n; i++) this.p[i] = i; 
        this.rank = new Array(n).fill(1); 
        this.num = n; 
    }

    find(idx) {
        if (this.p[idx] === idx) return idx; 
        const res = this.find(this.p[idx]); 
        this.p[idx] = res; 
        return res; 
    }

    union(i, j) {
        const pi = this.find(i); 
        const pj = this.find(j); 
        if (pi === pj) return; 
        if (this.rank[pi] > this.rank[pj]) {
            this.p[pj] = pi;
            this.rank[pi] += this.rank[pj]; 
        } else {
            this.p[pi] = pj; 
            this.rank[pj] += this.rank[pi];  
        }
        this.num--; 
    }

    size(){
        return this.num; 
    }
}

```

```js
// works but too slow
var numSimilarGroups = function(A) {
    const M = new Array(A.length).fill().map(() => new Array(A.length).fill(0)); 
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (i === j) {
                M[i][j] = 1; 
            } else {
                if (oneSwapAway(A[i], A[j])) {
                    M[i][j] = 1; 
                }
            }
        }
    }
    
    const N = M.length; 
    
    let count = 0; 
    let visited = new Set(); 
    
    for (let i = 0; i < N; i++) {
        if (!visited.has(i)) {
            dfs(i, M, visited); 
            count++; 
        }
    }
    return count; 
};


function dfs(i, M, visited) {
    if (visited.has(i)) return; 
    visited.add(i); 
    let row = M[i]; 
    for (let j = 0; j < row.length; j++) {
        if (row[j] === 1) {
            dfs(j, M, visited); 
        }
    }
}

function oneSwapAway(word1, word2) {
    if (word1 === word2) return true; 
    for (let i = 0; i <= word1.length-2; i++) {
        for (let j = i+1; j <= word1.length-1; j++) {
            let word1Copy = word1.split(''); 
            [word1Copy[i], word1Copy[j]] = [word1Copy[j], word1Copy[i]]; 
            word1Copy = word1Copy.join(''); 
            if (word1Copy === word2) {
                return true; 
            }
        }
    }
    return false; 
}

```