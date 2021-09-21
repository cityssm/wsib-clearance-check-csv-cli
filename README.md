# wsib-clearance-check-csv-cli

[![Codacy grade](https://img.shields.io/codacy/grade/3fb7c647878846aa9323994115aa57a9)](https://app.codacy.com/gh/cityssm/wsib-clearance-check-csv-cli/dashboard)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/wsib-clearance-check-csv-cli)](https://codeclimate.com/github/cityssm/wsib-clearance-check-csv-cli)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/cityssm/wsib-clearance-check-csv-cli/Testing)](https://github.com/cityssm/wsib-clearance-check-csv-cli/actions/workflows/test.yml)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/wsib-clearance-check-csv-cli)](https://app.snyk.io/org/cityssm/project/9605d6ee-84f6-41f6-a0c4-b5daa96160ae)

A command line tool to simplify retrieving clearance certificates from the WSIB website.

**Looking to tie WSIB clearance certificate lookups into your own project?**
[Check out the wsib-clearance-check project.](https://github.com/cityssm/wsib-clearance-check)

## Usage

```sh
node lookup
     -input [inputFile.txt | inputFile.csv]
     -output [outputFile.csv]
     -error [errorFile.csv]
     [-real]
```

### Parameters

`-input [inputFile.txt | inputFile.csv]` or
`-i [inputFile.txt | inputFile.csv]`

-   Specifies the path to the text file that should be parsed.

-   The file can be either
    a [simple text file](test/input.txt) with one WSIB Account Number on each line,
    or a [CSV file](test/input.csv) with the WSIB Account Number in the first column.

`-output [outputFile.csv]` or
`-o [outputFile.csv]`

-   Specifies the name of the CSV file that should contain
    successfully retrieved clearance certificates.

-   This file is only written if there are records to write.

-   The output file includes the following fields.
    [See a sample output file.](test/output.csv)

    -   accountNumber
    -   contractorLegalTradeName
    -   contractorAddress
    -   clearanceCertificateNumber
    -   validityPeriodStart
    -   validityPeriodEnd
    -   principalLegalTradeName
    -   principalAddress
    -   certificateURL

`-error [errorFile.csv]` or
`-e [errorFile.csv]`

-   Specifies the name of the CSV file that should contain error messages.

-   This file is only written if there are errors to write.

-   The error file includes the following fields.
    [See a sample error file.](test/error.csv)

    -   accountNumber
    -   error
    -   errorURL

`-real` or
`-r`

-   Runs in "real browser" mode, as opposed to "headless browser" mode.

-   Useful for debugging, but not recommended for production use.

## Setup

Ensure system has [NodeJS](https://nodejs.org/) 14 or better installed.

Download the latest code from this repository.  This can be done from this website,
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
