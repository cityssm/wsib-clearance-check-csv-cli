import minimist from "minimist";
import { loadAccountNumbers, writeCSVFile } from "./file-processor.js";
import { setHeadless, getClearanceByAccountNumber } from "@cityssm/wsib-clearance-check";

import type * as wsibTypes from "@cityssm/wsib-clearance-check/types";

const usage = `
-----------------------------------------------------------
| USAGE                                                   |
| ------------------------------------------------------- |
| node lookup                                             |
|      -input inputFile.txt                               |
|      -output outputFile.csv                             |
|      -error errorFile.csv                               |
|      [-real]                                            |
| ------------------------------------------------------- |
| DOCUMENTATION                                           |
| https://github.com/cityssm/wsib-clearance-check-csv-cli |
-----------------------------------------------------------
`;

const run = async () => {

  console.log();

  const argv = minimist(process.argv.slice(2));

  const inputFile = argv.input || argv.i;

  if (!inputFile) {
    console.log(usage);
    throw new Error("-input parameter missing");
  }

  const outputFile = argv.output || argv.o;

  if (!outputFile) {
    console.log(usage);
    throw new Error("-output parameter missing");
  }

  const errorFile = argv.error || argv.e;

  if (!errorFile) {
    console.log(usage);
    throw new Error("-error parameter missing");
  }

  const realBrowser = argv.real || argv.r;

  if (realBrowser) {
    console.log("- Running in real browser mode.")
    setHeadless(false);
  }

  const accountNumbers = loadAccountNumbers(inputFile);

  console.log("- " + accountNumbers.length + " account numbers to process.");

  const outputResults: wsibTypes.WSIBClearance_Success[] = [];
  const errorResults: wsibTypes.WSIBClearance_Failure[] = [];

  for (const [accountNumberIndex, accountNumber] of accountNumbers.entries()) {

    console.log("- Processing \"" + accountNumber + "\"" +
      " (" + (accountNumberIndex + 1).toString() + "/" + accountNumbers.length.toString() +
      ", success = " + outputResults.length.toString() +
      (errorResults.length > 0 ? ", error = " + errorResults.length.toString() : "") +
      ")");

    const results = await getClearanceByAccountNumber(accountNumber);

    if (results.success) {

      delete (results.contractorNAICSCodes);
      delete (results.success);
      outputResults.push(results);

    } else {
      delete (results.success);
      errorResults.push(results as wsibTypes.WSIBClearance_Failure);
    }
  }

  if (outputResults.length > 0) {
    console.log("- Writing " + outputResults.length.toString() + " records to " + outputFile);
    writeCSVFile(outputFile, outputResults);
  } else {
    console.log("- No successful records to write to " + outputFile);
  }

  if (errorResults.length > 0) {
    console.log("- Writing " + errorResults.length.toString() + " records to " + errorFile);
    writeCSVFile(errorFile, errorResults);
  } else {
    console.log("- No error records to write to " + errorFile);
  }

  console.log("Done.");
};

run();
