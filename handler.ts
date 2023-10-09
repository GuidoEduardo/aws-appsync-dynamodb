import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { readFileSync } from 'fs'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { initializeTable } from './src/common'
import { resolvers } from './src/resolver'

const typeDefs = readFileSync('./src/schema.gql').toString('utf-8')

const schema = makeExecutableSchema({
    resolvers, typeDefs
})

async function main() {
    await initializeTable({ tableName: 'awslearning' })

    const yoga = createYoga({ schema })
    const server = createServer(yoga)

    server.listen(4000, () => {
        console.info("Server is running on http://localhost:4000/graphql")
    })
}

main().catch(console.error);