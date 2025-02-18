

function calculateVAT( price ) {
    if(typeof price === 'string'){
        return 'invalid';
    }
    else if(price < 0 || price == 0){
        return 'invalid';
    }
    else{
        const vat = (price * 7.5)/ 100; 
        return vat
    }
}
   
