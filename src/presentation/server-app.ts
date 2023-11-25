// Create a class to organize the logic of my server."
// Rules to apply to an object,

import { CreateTable } from '../domain/use-cases/create-table.use-case'
import { SaveFile } from '../domain/use-cases/save-file.use-case'

interface RunOptions {
  base: number
  limit: number
  showTable: boolean
  fileName: string
  fileDestination: string
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions): void {
    const table = new CreateTable().execute({ base, limit })

    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileName,
      fileDestination,
    })

    if (showTable) console.log(table)
    wasCreated ? console.log('file created') : console.log('file not created')
  }
}
