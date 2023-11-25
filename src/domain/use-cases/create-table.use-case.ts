// Business rules that I want to enforce on the class implementing this interface.
interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string
}

interface CreateTableOptions {
  base: number
  limit?: number
}

export class CreateTable implements CreateTableUseCase {
  // DI : dependency injection
  constructor() {}

  // here we execute the use case
  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = ''
    for (let i = 1; i < limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`
    }

    return outputMessage
  }
}
