import { Entity } from 'electrodb'
import { table, client } from '../../common'

export const UserModel = new Entity(
    {
        model: {
            entity: 'user',
            version: '1',
            service: 'projectmanager',
        },
        attributes: {
            id: {
                type: 'string',
            },
            firstName: {
                type: 'string',
            },
            lastName: {
                type: 'string',
            },
            username: {
                type: 'string',
            },
            email: {
                type: 'string',
            },
            role: {
                type: 'string',
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
                    composite: ['id'],
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
