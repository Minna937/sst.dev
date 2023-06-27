import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "notes/core/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TabelName: Table.Notes.tableName,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
            userId: "123",
            // The id of the note from the path
            noteId: event.pathParameters.id
        }
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("item not found.")
    };

    return result.Item;
});