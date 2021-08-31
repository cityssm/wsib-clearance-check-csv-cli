import fs from "fs";
import Papa from "papaparse";
export const loadAccountNumbers = (inputFile) => {
    const rawData = fs.readFileSync(inputFile, "utf-8");
    const results = Papa.parse(rawData, {
        header: false,
        dynamicTyping: true
    });
    const csvRows = results.data;
    const accountNumbers = [];
    for (const row of csvRows) {
        if (row[0] && row[0] !== "") {
            accountNumbers.push(row[0]);
        }
    }
    return accountNumbers;
};
export const writeCSVFile = (outputFile, outputData) => {
    const csvData = Papa.unparse(outputData);
    fs.writeFile(outputFile, csvData, {}, (error) => {
        if (error) {
            console.log("Error writing file.");
            throw error;
        }
    });
};
