import { Entity } from 'electrodb'
import { table, client } from '../common'
import { randomUUID } from 'crypto'

export const Team = new Entity(
  {
    model: {
      entity: 'team',
      version: '1',
      service: 'projectmanager',
    },
    attributes: {
      team: {
        type: 'string',
        readOnly: true,
        default: () => randomUUID(),
      },
      name: {
        type: 'string',
      },
      leader: {
        type: 'string',
      },
      members: {
        type: 'set',
        items: 'string',
      },
      createdAt: {
        type: 'number',
        readOnly: true,
        default: () => Date.now(),
      },
      updatedAt: {
        type: 'number',
        readOnly: true,
        watch: '*',
        default: () => Date.now(),
        set: () => Date.now(),
      },
    },
    indexes: {
      team: {
        pk: {
          field: 'pk',
          composite: ['team'],
        },
        sk: {
          field: 'sk',
          composite: [],
        },
      },
      leader: {
        collection: 'user',
        index: 'gsi1pk-gsi1sk-index',
        pk: {
          field: 'gsi1pk',
          composite: ['leader'],
        },
        sk: {
          field: 'gsi1sk',
          composite: ['team', 'name'],
        },
      },
    },
  },
  { table, client },
)
