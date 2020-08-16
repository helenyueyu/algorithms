function orderFalseFirst(arr) {
    let i = 0; 
    let k = 0; 
    while (k < arr.length) {
        if (arr[k] === false) {
            swap(arr, i, k);
            i++; 
        }
        k++; 
    }
    return arr; 
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
}

console.log(orderFalseFirst([true, true, true])); 
console.log(orderFalseFirst([false, false, false, false])); 
console.log(orderFalseFirst([false, false, true, false, true, true, false])); 