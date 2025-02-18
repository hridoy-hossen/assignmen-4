 
function  validContact( contact ) {
    let englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if(typeof contact === 'string'){
        if(contact.length === 11){
            if(contact[0] === '0' && contact[1] === '1'){
                if(contact.includes(' ')){
                    return false;
                }
                else{
                    for(let i of englishAlphabet){
                        if(contact.includes(i)){
                            return false;
                        }
                    }
                    return true;
                }
            }
            else{
                return false
            }
        }
        else{
            return false;
        }
    }
    else{
        return 'invalid'
    }
}

    


