import { afterAll, beforeAll } from '@jest/globals';
import { client, dynamodb } from "./src/database/electrodb/common/client"
import { initializeTable } from './src/database/electrodb/common'

beforeAll(async () => {
    await initializeTable({ tableName: 'awslearning' })
})


afterAll(() => {
    client.destroy()
    dynamodb.destroy()
})