import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestGraphQlCodeResourceService } from './test-graph-ql-code-resource.service';
import { TestGraphQlCodeResource } from './entities/test-graph-ql-code-resource.entity';
import { CreateTestGraphQlCodeResourceInput } from './dto/create-test-graph-ql-code-resource.input';
import { UpdateTestGraphQlCodeResourceInput } from './dto/update-test-graph-ql-code-resource.input';

@Resolver(() => TestGraphQlCodeResource)
export class TestGraphQlCodeResourceResolver {
  constructor(
    private readonly testGraphQlCodeResourceService: TestGraphQlCodeResourceService,
  ) {}

  @Mutation(() => TestGraphQlCodeResource)
  createTestGraphQlCodeResource(
    @Args('createTestGraphQlCodeResourceInput')
    createTestGraphQlCodeResourceInput: CreateTestGraphQlCodeResourceInput,
  ) {
    return this.testGraphQlCodeResourceService.create(
      createTestGraphQlCodeResourceInput,
    );
  }

  @Query(() => [TestGraphQlCodeResource], { name: 'testGraphQlCodeResource' })
  findAll() {
    return this.testGraphQlCodeResourceService.findAll();
  }

  @Query(() => TestGraphQlCodeResource, { name: 'testGraphQlCodeResource' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.testGraphQlCodeResourceService.findOne(id);
  }

  @Mutation(() => TestGraphQlCodeResource)
  updateTestGraphQlCodeResource(
    @Args('updateTestGraphQlCodeResourceInput')
    updateTestGraphQlCodeResourceInput: UpdateTestGraphQlCodeResourceInput,
  ) {
    return this.testGraphQlCodeResourceService.update(
      updateTestGraphQlCodeResourceInput.id,
      updateTestGraphQlCodeResourceInput,
    );
  }

  @Mutation(() => TestGraphQlCodeResource)
  removeTestGraphQlCodeResource(@Args('id', { type: () => Int }) id: number) {
    return this.testGraphQlCodeResourceService.remove(id);
  }
}
