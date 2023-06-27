import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, PutCommand, QueryCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient();

export default {
  get: (params) => client.send(new GetCommand(params)),
  put: (params) => client.send(new PutCommand(params)),
  query: (params) => client.send(new QueryCommand(params)),
  update: (params) => client.send(new UpdateCommand(params)),
  delete: (params) => client.send(new DeleteCommand(params)),
};
