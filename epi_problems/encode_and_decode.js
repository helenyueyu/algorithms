/* 
Things you forgot to consider: 
    * digits can be more than 1 character long!

*/


function RLE(s) {
    let res = ""; 
    let i = 0; 
    while (i < s.length) {
        let j = i; 
        while (s[j] === s[i]) {
            j++; 
        }
        res += `${j-i}` + s[i]; 
        i = j; 
    }
    return res; 
}
// console.log(RLE("")); 
// console.log(RLE("aaaaaa")); 
// console.log(RLE("abababa")); 
// console.log(RLE("ccccccca")); 
// console.log(RLE("aabbbc")); 

function RLD(s) {
    let res = ""; 
    for (let i = 0; i < s.length; i+=2) {
        const [n, c] = [s[i], s[i+1]]; 
\        for (let j = 0; j < parseInt(n); j++) {
            res += c; 
        }
    }
    return res; 
}


console.log(RLD('2a3b1c')); 
