import { resolvers } from './resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'
import { useEngine } from '@envelop/core'
import {
    OneOfInputObjectsRule,
    useExtendedValidation,
} from '@envelop/extended-validation'
import { execute, parse, specifiedRules, subscribe, validate } from 'graphql'
import { common } from './schemas/common'
import { user } from './schemas/user'

const typeDefs = [common, user]

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
})

export const graphql = createYoga({
    schema,
    plugins: [
        useEngine({ execute, parse, specifiedRules, subscribe, validate }),
        useExtendedValidation({
            rules: [OneOfInputObjectsRule],
        }),
    ],
})
