## Implementation
```js
var accountsMerge = function(accounts) {
    const h = {}; 
    
    const uf = new UnionFind(accounts.length); 
    
    for (let i = 0; i < accounts.length-1; i++) {
        for (let j = i+1; j < accounts.length; j++) {
            if (overlap(accounts[i], accounts[j])) {
                uf.union(i, j); 
            }
        }
    }
    
    for (let i = 0; i < accounts.length; i++) {
        let p = uf.find(i); 
        if (h[p] === undefined) {
            h[p] = [i]; 
        } else {
            h[p].push(i); 
        }
    }
    
    const res = []; 
    for (let k in h) {
        let a = []; 
        a.push(accounts[k][0]);
        let set = new Set(); 
        for (let val of h[k]) {
            let emails = accounts[val].slice(1); 
            for (let email of emails) {
                set.add(email); 
            }
        }
        res.push(a.concat(Array.from(set)).sort()); 
    }
    return res; 
};

function overlap(account1, account2) {
    let email1 = account1.slice(1); 
    for (let i = 1; i < account2.length; i++) {
        if (email1.includes(account2[i])) {
            return true; 
        }
    }
    return false; 
}

class UnionFind {
    constructor(n) {
        this.arr = new Array(n); 
        for (let i = 0; i < n; i++) {
            this.arr[i] = i; 
        }
    }
    
    find(x) {
        if (this.arr[x] !== x) {
            this.arr[x] = this.find(this.arr[x]); 
        }
        return this.arr[x]; 
    }
    
    union(x,y) {
        let px = this.find(x); 
        let py = this.find(y); 
        if (px !== py) {
            this.arr[px] = py; 
        }
    }
}
```