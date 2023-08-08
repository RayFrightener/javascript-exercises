const removeFromArray = function(arr,toRemove,toRemoveToo) {
function elementToKeep(element){
    return element !== toRemove || element !== toRemoveToo;
}
return arr.filter(elementToKeep);

};

// Do not edit below this line
module.exports = removeFromArray;
