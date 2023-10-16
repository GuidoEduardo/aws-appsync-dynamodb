import tableDef from './config.json'
import { dynamodb } from './client'

export const table = 'awslearning'

export function createTableManager(options: { tableName: string }) {
    const { tableName } = options

    return {
        async exists() {
            let tables = await dynamodb.listTables({})
            return !!tables.TableNames?.includes(tableName)
        },
        async drop() {
            return dynamodb.deleteTable({ TableName: tableName })
        },
        async create() {
            return dynamodb.createTable({ ...tableDef, TableName: tableName })
        },
    }
}

export async function initializeTable(options: { tableName: string }) {
    const { tableName } = options
    const tableManager = createTableManager({ tableName })
    const exists = await tableManager.exists()

    if (exists) {
        return
    }

    await tableManager.create()
}
