import 'reflect-metadata'
import './shared/container'

import { App } from './shared/infra/fastify/app'

App.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at: ${address}`)
})
