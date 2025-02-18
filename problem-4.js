// this function is for metromonial SubmitEvent. which is deside 2 person are ready for marrage or Notification. 
// problem 4
function  validProposal( person1 , person2 ) {
    if(typeof person1 === 'object' && typeof person2 === 'object'){
        if('name'in person1 && 'name' in person2 && 'gender'in person1 && 'gender' in person2 && 'age'in person1 && 'age' in person2){
            let ageDiff = Math.abs(person1.age - person2.age);
            if(ageDiff <= 7){      
                if((person1.gender.toLowerCase()) !== (person2.gender.toLowerCase())){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        else{
            return 'check e somosha'
        }
    }
    else{
        return 'invalid';
    }
}



