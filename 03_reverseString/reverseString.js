const reverseString = function(strToReverse) {
    let stringArray = []
    for (i = strToReverse.length; i != -1; i--) {
        stringArray.push(strToReverse[i])
    }

    let stringReversed = stringArray.join('');

    return stringReversed
}


// Do not edit below this line
module.exports = reverseString;
