import { Template } from "aws-cdk-lib/assertions";
import { initProject, initProjects } from "sst/project";
import { App, getStack } from "sst/constructs";
import { StorageStack } from "../StorageStack";
import { it } from "vitest";

it("Test StorageStack", async()=>{
    await initProject({});
    const app = new App ({mode:"deploy"});
    //when
    app.stack(StorageStack);
    //then
    const template = Template.fromStack(getStack(StorageStack));
    template.hasResourceProperties("AWS::DynamoDB::Tabel",{
        BillingMode:"PAY_PER_REQUEST",
    });
});