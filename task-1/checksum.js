// have total ✓
// check that first item is equal to last item if so add to total ✓
// check that previous item is the same as current item if so add to total ✓

/**
 * 
 * @param {string} rawData Number String
 * @param {string} checkSum Client sent checksum
 * @return {boolean}
 */
const isCheckSumCorrect = (rawData, checkSum) => {
    let total = 0;
    const lastDataIndex  = rawData.length - 1;

    for (let i = 0; i < rawData.length; i++) {
        if ((i === 0 && rawData[lastDataIndex] === rawData[i]) || i > 0 && rawData[i - 1] === rawData[i]) {
            total += parseInt(rawData[i], 10)
        }
    }
    return `${total}` === checkSum;
}

module.exports.isCheckSumCorrect = isCheckSumCorrect;