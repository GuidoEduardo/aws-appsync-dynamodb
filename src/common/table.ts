import tableDef from './definition.json'
import { dynamodb } from './client'

export const table = 'awslearning'

type CreateTableManagerOptions = {
  tableName: string
}

export function createTableManager(options: CreateTableManagerOptions) {
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

type InitializeTableOptions = {
  tableName: string
}

export async function initializeTable(options: InitializeTableOptions) {
  const { tableName } = options
  const tableManager = createTableManager({ tableName })
  const exists = await tableManager.exists()

  if (exists) {
    return
  }

  await tableManager.create()
}
