
function stringMatching(str1, str2){
    
        let pi = []
        let j = 0;
        for(let i = 0; i<str2.length; i++){
            if(str2[i] == str2[j] && i != j){
                pi[i] = j;
                j++;
            }
            else{
                if(j != 0) i--;
                else pi[i] = 0
                j = 0;
            }
        }

        console.log(pi)

    
    // iterate throught str1 to check pattern
    j = 0;
    for(let i = 0; i<str1.length; i++){
        if(str1[1] == str2[j]){
            i++;
            j++;
        }
        else {
            j = pi[i];
        }


        if(j == str2.length){
            return 1;
        }
    }

    return 0;

    
    
    
}

stringMatching('abcdefghi', 'ab')

