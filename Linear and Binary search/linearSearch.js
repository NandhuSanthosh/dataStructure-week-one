// to find the first occurance of a number

function linearSearch(arr, n){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == n){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([6, 5, 7, 3, 8, 1], 5))
