const removeFromArray = function(arr, ...unwantedElements) {
    if (!(arr instanceof Array)) return 'ERROR';
    return arr.filter((element) => checkIfToKeep(element, unwantedElements));
};

function checkIfToKeep(elementToCheck, unwantedElements) {
    for (const element of unwantedElements) {
        if (elementToCheck === element)
            return false;
    }
    return true;
}

// Do not edit below this line
module.exports = removeFromArray;
