 
function validAnagram(str1, str2){
    
    // check whether the length is same or not 
    if(str1.length != str2.length)
        // return false if not
        return false;
    
        
    // declare two objects to store the frequencies
    let frequency1 = {}, frequency2 = {};
    
    
    // iterate through the strings and fill the frequency objects
    for(let char of str1){
        frequency1[char] = ++frequency1[char] || 1;
    }
    
    for(let char of str2){
        if(!frequency1[char]){
            return false;
        }
        else{
            frequency1[char]--;
        }
    }

    return true;
}

console.log(validAnagram("rac","car"))