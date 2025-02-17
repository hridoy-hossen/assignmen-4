// Tasl-3 check an array of marks and justify will he succed or not.
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
let markNum = willSuccess(examMark)
console.log(markNum);
