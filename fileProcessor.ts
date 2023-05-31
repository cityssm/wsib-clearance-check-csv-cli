import XLSX from 'xlsx'

const cellNameRegularExpression = /^A\d+$/
const accountNumberRegularExpression = /^\d+$/

export function loadAccountNumbers(inputFile: string): string[] {
  const accountNumbers: string[] = []

  const workbook = XLSX.readFile(inputFile)

  if (!workbook) {
    return accountNumbers
  }

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  if (!sheet) {
    return accountNumbers
  }

  for (const [cellName, cellData] of Object.entries(sheet)) {
    if (!cellNameRegularExpression.test(cellName)) {
      continue
    }

    const potentialAccountNumber: string = cellData.v ?? ''

    if (accountNumberRegularExpression.test(potentialAccountNumber)) {
      accountNumbers.push(potentialAccountNumber)
    }
  }

  return accountNumbers
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const writeCSVFile = (outputFile: string, outputData: any[]): void => {

  const sheet = XLSX.utils.json_to_sheet(outputData)

  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, sheet)

  XLSX.writeFile(workbook, outputFile, {
    bookType: 'csv'
  })
}
