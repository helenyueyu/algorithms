function partitionIntoThirds(arr, val) {
    let i = 0; 
    let j = arr.length-1; 
    
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] < val) {
            swap(arr, i, k); 
            i++; 
        }
    }
    
    for (let k = arr.length-1; k >= 0; k--) {
        if (arr[k] > val) {
            swap(arr, k, j); 
            j--; 
        }
    }
    return arr; 
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
}

console.log(partitionIntoThirds([3, 1, 4, 4, 2, 7, 0, 3, 6, 2, 3, 3, 9], 3)); 
console.log(partitionIntoThirds([1, 2, 2, 1, 1, 1, 1, 4, 1, 1, 5, 5], 3)); 


