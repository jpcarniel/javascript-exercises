const removeFromArray = function(toPop, ...nbrs) {
    
    for (const nbr of nbrs) {
        for (i = 0; i < toPop.length; i++) {
            if (toPop[i] === nbr) {
                toPop.splice(i, 1)
            }
        }
    }
    
    return toPop

};

// Do not edit below this line
module.exports = removeFromArray;