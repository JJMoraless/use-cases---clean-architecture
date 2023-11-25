import { yarg } from './config/plugins/yargs.adapter'
import { ServerApp } from './presentation/server-app'

const main = async () => {
  const {
    b: base,
    l: limit,
    s: showTable,
    d: fileDestination,
    n: fileName,
  } = yarg

  console.log(yarg)

  ServerApp.run({ base, limit, showTable, fileDestination, fileName })
}

main()
