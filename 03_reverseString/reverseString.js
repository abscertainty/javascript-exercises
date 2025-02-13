const reverseString = function(stringToReverse) {
    if (typeof(stringToReverse) != 'string') return 'ERROR';
    let reversedString = ''
    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        reversedString += stringToReverse.at(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
