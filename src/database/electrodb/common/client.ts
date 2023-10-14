import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDB } from '@aws-sdk/client-dynamodb'

const configuration = {
    region: 'us-east-1',
}

export const client = new DynamoDBClient(configuration)
export const dynamodb = new DynamoDB(configuration)
