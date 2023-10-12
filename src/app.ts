import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { readFileSync } from 'fs'
import { execute, parse, specifiedRules, subscribe, validate } from 'graphql'
import { useEngine } from '@envelop/core'
import { OneOfInputObjectsRule, useExtendedValidation } from '@envelop/extended-validation'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { initializeTable } from './common'
import { resolvers } from './resolver'

const typeDefs = readFileSync('./src/schema.gql').toString('utf-8')

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

async function main() {
  await initializeTable({ tableName: 'awslearning' })

  const yoga = createYoga({
    schema,
    plugins: [
      useEngine({ execute, parse, specifiedRules, subscribe, validate }),
      useExtendedValidation({
        rules: [OneOfInputObjectsRule]
      })
    ]
  })

  const server = createServer(yoga)

  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}

main().catch(console.error)
