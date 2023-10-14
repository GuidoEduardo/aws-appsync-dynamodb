import { createServer } from 'http'
import { initializeTable } from 'database/electrodb/common'
import { graphql } from 'views/graphql'

async function main() {
    await initializeTable({ tableName: 'awslearning' })

    const server = createServer(graphql)

    server.listen(4001, () => {
        console.info('Server is running on http://localhost:4001/graphql')
    })
}

main().catch(console.error)
