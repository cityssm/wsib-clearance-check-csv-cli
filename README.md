# wsib-clearance-check-csv-cli

[![Codacy grade](https://img.shields.io/codacy/grade/3fb7c647878846aa9323994115aa57a9)](https://app.codacy.com/gh/cityssm/wsib-clearance-check-csv-cli/dashboard)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/wsib-clearance-check-csv-cli)](https://codeclimate.com/github/cityssm/wsib-clearance-check-csv-cli)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/cityssm/wsib-clearance-check-csv-cli/Testing)](https://github.com/cityssm/wsib-clearance-check-csv-cli/actions/workflows/test.yml)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/wsib-clearance-check-csv-cli)](https://app.snyk.io/org/cityssm/project/9605d6ee-84f6-41f6-a0c4-b5daa96160ae)

A command line tool to retrieve clearance certificates from the WSIB website.

Looking to tie WSIB clearance certificate lookups into your own project?
[Check out the wsib-clearance-check project.](https://github.com/cityssm/wsib-clearance-check)

## Usage

```sh
node lookup
     -input inputFile.txt
     -output outputFile.csv
     -error errorFile.csv
```

### Parameters

`-input inputFile.txt` or
`-i inputFile.txt`

-   Specifies the path to the text file that should be parsed.

-   The file should contain each account number on a new line.
    See the [test input file](test/input.txt) for an example.

`-output outputFile.csv` or
`-o outputFile.csv`

-   Specifies the name of the CSV file that should be written.

`-error errorFile.csv` or
`-e errorFile.csv`

-   Specifies the name of the CSV file that should be written.

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
