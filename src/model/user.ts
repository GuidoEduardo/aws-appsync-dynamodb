import { Entity } from 'electrodb';
import { table, client } from '../common'
import { randomUUID } from 'crypto';


export const User = new Entity(
    {
        model: {
            entity: 'user',
            version: '1',
            service: 'awslearn'
        },
        attributes: {
            // team: {
            //     type: 'string',
            // },
            user: {
                type: 'string',
                readOnly: true,
                default: () => randomUUID(),
            },
            username: {
                type: 'string',
                required: true,
            },
            email: {
                type: 'string',
                required: true,
                validate: /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
            },
            role: {
                type: ['admin', 'project_lead', 'collaborator'] as const,
                required: true,
            },
            createdAt: {
                type: 'number',
                readOnly: true,
                default: () => Date.now(),
            },
            updatedAt: {
                type: 'number',
                watch: "*",
                readOnly: true,
                default: () => Date.now(),
                set: () => Date.now(),
            }
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
                }
            },
            username: {
                index: 'gsi1pk-gsi1sk-index',
                pk: {
                    field: 'gsi1pk',
                    composite: ['username'],
                },
                sk: {
                    field: 'gsi1sk',
                    composite: [],
                }
            }
        },
    },
    { table, client }
)
