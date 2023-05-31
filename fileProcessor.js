import XLSX from 'xlsx';
const cellNameRegularExpression = /^A\d+$/;
const accountNumberRegularExpression = /^\d+$/;
export function loadAccountNumbers(inputFile) {
    var _a;
    const accountNumbers = [];
    const workbook = XLSX.readFile(inputFile);
    if (!workbook) {
        return accountNumbers;
    }
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    if (!sheet) {
        return accountNumbers;
    }
    for (const [cellName, cellData] of Object.entries(sheet)) {
        if (!cellNameRegularExpression.test(cellName)) {
            continue;
        }
        const potentialAccountNumber = (_a = cellData.v) !== null && _a !== void 0 ? _a : '';
        if (accountNumberRegularExpression.test(potentialAccountNumber)) {
            accountNumbers.push(potentialAccountNumber);
        }
    }
    return accountNumbers;
}
export const writeCSVFile = (outputFile, outputData) => {
    const sheet = XLSX.utils.json_to_sheet(outputData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet);
    XLSX.writeFile(workbook, outputFile, {
        bookType: 'csv'
    });
};
