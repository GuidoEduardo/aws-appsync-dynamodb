import { randomUUID } from 'crypto'
import { Entity } from 'electrodb'
import { table, client } from '../common'

export const Issue = new Entity(
  {
    model: {
      entity: 'issue',
      version: '1',
      service: 'projectmanager',
    },
    attributes: {
      issue: {
        type: 'string',
        readOnly: true,
        default: () => randomUUID(),
      },
      summary: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      assignee: {
        type: 'string',
      },
      reporter: {
        type: 'string',
      },
      created_at: {
        type: 'number',
        readOnly: true,
        default: () => Date.now(),
      },
      updated_at: {
        type: 'number',
        readOnly: true,
        watch: '*',
        default: () => Date.now(),
        set: () => Date.now(),
      },
    },
    indexes: {
      issue: {
        pk: {
          field: 'pk',
          composite: ['issue'],
        },
        sk: {
          field: 'sk',
          composite: [],
        },
      },
    },
  },
  { table, client },
)
