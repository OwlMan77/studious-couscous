const checkSum = require('./tsv-checksum');

describe('isTsvCheckSumCorrect', () => {
    const tests = [ 
        {
            name: 'Example form task description should be false ',
            path: 'task-2/assets/01-general.tsv',
            clientCheckSum: '32121',
            expectedResult: false,
        },
        {
            name: 'Example form task description should work with proper checksum ',
            path: 'task-2/assets/01-general.tsv',
            clientCheckSum: '35271',
            expectedResult: true,
        },
        {
            name: 'Should evaluate correctly when given another tsv.',
            path: 'task-2/assets/test-1.tsv',
            clientCheckSum: '324',
            expectedResult: true,
        },
     ];

     tests.forEach((test) => {
        it(test.name, async() => {
            const result = await checkSum.isTsvCheckSumCorrect(test.path, test.clientCheckSum);
            expect(result).toBe(test.expectedResult);
        });
     })

})