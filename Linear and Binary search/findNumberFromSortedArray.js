function binarySearching(arr, n){

    let u = 0, v = arr.length -1;

    while(u <= v){
        let mid = Math.floor((u + v) / 2)
        if(arr[mid] == n){
            return mid;
        }
        if(arr[mid] > n){
            v = mid-1;
        }
        else{
            u = mid + 1;
        }
    }

    return -1;
}


console.log(binarySearching( [1, 2, 3, 4, 5, 6], 5));