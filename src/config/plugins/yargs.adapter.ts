import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'base number for multiplication',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'show multiplication table',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'file name',
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'file destination',
  })
  .check((argv) => {
    if (argv.b < 0) throw 'error: base must be a positive number'
    return true
  })
  .parseSync()
