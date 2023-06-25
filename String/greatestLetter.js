var nextGreatestLetter = function(letters, target) {
    let output = letters[0]
    
    let start = 0, end = letters.length - 1
    while( start <= end){
        console.log(start, end)
        let mid = Math.floor(start + ((end - start) / 2))
        if(letters[mid] > target){
            output = letters[mid]
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
   console.log ( output )
};

nextGreatestLetter(["c", "f", "j"], "f")