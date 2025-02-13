const repeatString = function(stringToRepeat, nbrOfRepeats) {
    if (nbrOfRepeats < 0) return 'ERROR';
    let repeatedString = '';
    for (let i = 0; i < nbrOfRepeats; i++) {
        repeatedString += stringToRepeat;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
