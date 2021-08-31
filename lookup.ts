import minimist from "minimist";
import { loadAccountNumbers, writeCSVFile } from "./file-processor.js";
import { getClearanceByAccountNumber } from "@cityssm/wsib-clearance-check";

import type * as wsibTypes from "@cityssm/wsib-clearance-check/types";

const usage = `
-----------------------------------------------------------
| USAGE                                                   |
| ------------------------------------------------------- |
| node lookup                                             |
|      -input inputFile.txt                               |
|      -output outputFile.csv                             |
|      -error errorFile.csv                             |
| ------------------------------------------------------- |
| DOCUMENTATION                                           |
| https://github.com/cityssm/wsib-clearance-check-csv-cli |
-----------------------------------------------------------
`;

const run = async () => {

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

  const accountNumbers = loadAccountNumbers(inputFile);

  const outputResults: wsibTypes.WSIBClearance_Success[] = [];
  const errorResults: wsibTypes.WSIBClearance_Failure[] = [];

  for (const accountNumber of accountNumbers) {

    if (!accountNumber) {
      continue;
    }

    const results = await getClearanceByAccountNumber(accountNumber);

    if (results.success) {
      delete(results.contractorNAICSCodes);
      outputResults.push(results);
    } else {
      errorResults.push(results as wsibTypes.WSIBClearance_Failure);
    }
  }

  if (outputResults.length > 0) {
    writeCSVFile(outputFile, outputResults);
  }

  if (errorResults.length > 0) {
    writeCSVFile(errorFile, errorResults);
  }

  console.log("Done.");
};

run();
