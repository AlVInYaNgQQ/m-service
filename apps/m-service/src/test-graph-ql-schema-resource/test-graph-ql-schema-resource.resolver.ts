import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TestGraphQlSchemaResourceService } from "./test-graph-ql-schema-resource.service";
import { CreateTestGraphQlSchemaResourceInput } from "./dto/create-test-graph-ql-schema-resource.input";
import { UpdateTestGraphQlSchemaResourceInput } from "./dto/update-test-graph-ql-schema-resource.input";

@Resolver("TestGraphQlSchemaResource")
export class TestGraphQlSchemaResourceResolver {
  constructor(
    private readonly testGraphQlSchemaResourceService: TestGraphQlSchemaResourceService,
  ) {}

  @Mutation("createTestGraphQlSchemaResource")
  create(
    @Args("createTestGraphQlSchemaResourceInput")
    createTestGraphQlSchemaResourceInput: CreateTestGraphQlSchemaResourceInput,
  ) {
    return this.testGraphQlSchemaResourceService.create(
      createTestGraphQlSchemaResourceInput,
    );
  }

  @Query("testGraphQlSchemaResource")
  findAll() {
    return this.testGraphQlSchemaResourceService.findAll();
  }

  @Query("testGraphQlSchemaResource")
  findOne(@Args("id") id: number) {
    return this.testGraphQlSchemaResourceService.findOne(id);
  }

  @Mutation("updateTestGraphQlSchemaResource")
  update(
    @Args("updateTestGraphQlSchemaResourceInput")
    updateTestGraphQlSchemaResourceInput: UpdateTestGraphQlSchemaResourceInput,
  ) {
    return this.testGraphQlSchemaResourceService.update(
      updateTestGraphQlSchemaResourceInput.id,
      updateTestGraphQlSchemaResourceInput,
    );
  }

  @Mutation("removeTestGraphQlSchemaResource")
  remove(@Args("id") id: number) {
    return this.testGraphQlSchemaResourceService.remove(id);
  }
}
