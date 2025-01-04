import { Module } from "@nestjs/common";
import { TestGraphQlSchemaResourceService } from "./test-graph-ql-schema-resource.service";
import { TestGraphQlSchemaResourceResolver } from "./test-graph-ql-schema-resource.resolver";

@Module({
  providers: [
    TestGraphQlSchemaResourceResolver,
    TestGraphQlSchemaResourceService,
  ],
})
export class TestGraphQlSchemaResourceModule {}
