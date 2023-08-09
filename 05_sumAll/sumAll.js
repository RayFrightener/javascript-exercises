const sumAll = function(a,b) {
    let c =0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    if(start < 0){
        return "ERROR";
    }
    else if(typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    for(let i=start;i<=end;i++){
        c+=i
    } 
    return c; 
};

// Do not edit below this line
module.exports = sumAll;
