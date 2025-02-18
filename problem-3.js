
function  willSuccess( marks ) {
    let passNum = [];
    let failNum = [];
    if(Array.isArray(marks)){
        for(let i of marks){
            if(i >= 50){
                passNum.push(i);
            }
            else if(i <= 50){
                failNum.push(i)
            }
        }
        if(passNum.length > failNum.length){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'invalid'
    }
}

