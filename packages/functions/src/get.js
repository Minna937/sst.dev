import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "notes/core/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TabelName: Tabel.Notes.tableName,
        Key: {
            userId: "123",
            noteId: event.pathParameters.id
        }
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("item not found.")
    };

    return result.Item;
});