import { Entity } from 'electrodb'
import { randomUUID } from 'crypto'
import { table, client } from '../common'

export const User = new Entity(
  {
    model: {
      entity: 'user',
      version: '1',
      service: 'projectmanager',
    },
    attributes: {
      user: {
        type: 'string',
        readOnly: true,
        default: () => randomUUID(),
      },
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      username: {
        type: 'string',
        validate: /^\S+$/,
      },
      email: {
        type: 'string',
        validate:
          /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      },
      role: {
        type: ['admin', 'project_lead', 'collaborator'] as const,
      },
      createdAt: {
        type: 'number',
        readOnly: true,
        default: () => Date.now(),
      },
      updatedAt: {
        type: 'number',
        watch: '*',
        readOnly: true,
        default: () => Date.now(),
        set: () => Date.now(),
      },
    },
    indexes: {
      user: {
        pk: {
          field: 'pk',
          composite: ['user'],
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
