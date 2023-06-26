import { Table } from "sst/construcs";

export function StorageStack({ stack, app }) {
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey:"noteId"}
    });

    return {
        table
    };
}