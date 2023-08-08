const removeFromArray = function(arr, ...valuesToRemove) {
function isNotTheValueToRemove(element){
    return !valuesToRemove.includes(element);
}
return arr.filter(isNotTheValueToRemove);

};

// Do not edit below this line
module.exports = removeFromArray;
