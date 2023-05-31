# wsib-clearance-check-csv-cli

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3fb7c647878846aa9323994115aa57a9)](https://www.codacy.com/gh/cityssm/wsib-clearance-check-csv-cli/dashboard?utm_source=github.com&utm_medium=referral&utm_content=cityssm/wsib-clearance-check-csv-cli&utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/4ca34e70fd4186fff0ab/maintainability)](https://codeclimate.com/github/cityssm/wsib-clearance-check-csv-cli/maintainability)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/wsib-clearance-check-csv-cli/test.yml)](https://github.com/cityssm/wsib-clearance-check-csv-cli/actions/workflows/test.yml)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/wsib-clearance-check-csv-cli)](https://app.snyk.io/org/cityssm/project/9605d6ee-84f6-41f6-a0c4-b5daa96160ae)

A command line tool to simplify retrieving clearance certificates from the WSIB website.

**Looking to tie WSIB clearance certificate lookups into your own project?**
[Check out the wsib-clearance-check project.](https://github.com/cityssm/wsib-clearance-check)

## Usage

```sh
node lookup
     -input [inputFile.txt | inputFile.csv | inputFile.xlsx]
     -output [outputFile.csv]
     -error [errorFile.csv]
     [-real]
```

### Parameters

`-input [inputFile.txt | inputFile.csv | inputFile.xlsx]` or<br />
`-i [inputFile.txt | inputFile.csv | inputFile.xlsx]`

- Specifies the path to the file that should be parsed.

- The file can be either
  a [simple text file](test/input.txt) with one WSIB Account Number on each line,
  a [CSV file](test/input.csv) with the WSIB Account Number in the first column,
  or an [XLSX file](test/input.xlsx) with the WSIB Account Number in the first column of the first sheet.

`-output [outputFile.csv]` or
`-o [outputFile.csv]`

- Specifies the name of the CSV file that should contain
  successfully retrieved clearance certificates.

- This file is only written if there are records to write.

- The output file includes the following fields.
  [See a sample output file.](test/output.csv)

  - accountNumber
  - contractorLegalTradeName
  - contractorAddress
  - clearanceCertificateNumber
  - validityPeriodStart
  - validityPeriodEnd
  - principalLegalTradeName
  - principalAddress
  - certificateURL

`-error [errorFile.csv]` or
`-e [errorFile.csv]`

- Specifies the name of the CSV file that should contain error messages.

- This file is only written if there are errors to write.

- The error file includes the following fields.
  [See a sample error file.](test/error.csv)

  - accountNumber
  - error
  - errorURL

`-real` or
`-r`

- Runs in "real browser" mode, as opposed to "headless browser" mode.

- Useful for debugging, but not recommended for production use.

## Setup

Ensure system has [NodeJS](https://nodejs.org/) 14 or better installed.

Download the latest code from this repository. This can be done from this website,
from a `git` command line, or using [GitHub Desktop](https://desktop.github.com/).
Save to the folder of your choice.

Install the dependencies.

```sh
npm install
```

See if it works.

```sh
npm test
```

## 🙏 Thanks

This project was developed in collaboration with [FRANCOachat](https://ceafrancoachat.ca/),
an organization that provides procurement services to several Ontario school boards.
