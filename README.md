# wsib-clearance-check-csv-cli

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

    npm install

See if it works.

    npm test
