import { DynamoDBClient, DynamoDB } from '@aws-sdk/client-dynamodb'

const config = {
    region: 'us-east-1',
    ...(process.env.MOCK_DYNAMODB_ENDPOINT && {
        endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
        sslEnabled: false,
        region: 'local'
    })
}

export const client = new DynamoDBClient(config)
export const dynamodb = new DynamoDB(config)
