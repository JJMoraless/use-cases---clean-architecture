import fs from 'fs'
import { yarg } from './config/plugins/yargs.adapter'
const { b: base, l: limit, s: isShowTable } = yarg

let outputMessage = ''
const headerMessage = `
===========================
Table of ${base}
===========================\n
`

for (let i = 1; i < limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage

if (isShowTable) console.log(outputMessage)

const outputPath = `outputs`
fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage)
console.log('file created')
