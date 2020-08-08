// have total. ✓
// parse Tsv File. ✓
// separate into rows. ✓
// get min and max for each array type ✓
// add row totals together ✓
// eval clientChecksum ✓

const fs = require('fs').promises;

/**
 * 
 * @param {string} tsvPathLocation relative file location for tsv file 
 * @param {string} clientChecksum number string provided by client
 */
const isTsvCheckSumCorrect = async (tsvPathLocation, clientChecksum) => {
    let total = 0;
    const tsvFile = (await fs.readFile(tsvPathLocation)).toString();
    const rows = tsvFile.split('\n').map((row) => row.split('\t').filter((data) => !!data).map((value) => parseInt(value))).filter((row) => row.length > 0);
    rows.forEach((row) => {
        const maxValue = Math.max(...row);
        const minValue = Math.min(...row);
        total += maxValue + minValue;
    })
    return parseInt(clientChecksum, 10) === total;
}

module.exports.isTsvCheckSumCorrect = isTsvCheckSumCorrect;