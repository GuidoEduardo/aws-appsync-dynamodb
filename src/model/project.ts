import { Entity } from 'electrodb'
import { table, client } from '../common'
import { randomUUID } from 'crypto'

export const Project = new Entity(
  {
    model: {
      entity: 'project',
      version: '1',
      service: 'projectmanager',
    },
    attributes: {
      project: {
        type: 'string',
        readOnly: true,
        default: () => randomUUID(),
      },
      name: {
        type: 'string',
      },
      team: {
        type: 'string',
      },
      issues: {
        type: 'set',
        items: 'string',
      },
      created_at: {
        type: 'number',
        readOnly: true,
        default: () => Date.now(),
      },
      updated_at: {
        type: 'number',
        readOnly: true,
        default: () => Date.now(),
        set: () => Date.now(),
      },
    },
    indexes: {
      byTeam: {
        pk: {
          field: 'pk',
          composite: ['project'],
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
