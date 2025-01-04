import { Test, TestingModule } from '@nestjs/testing';
import { TestGraphQlSchemaResourceResolver } from './test-graph-ql-schema-resource.resolver';
import { TestGraphQlSchemaResourceService } from './test-graph-ql-schema-resource.service';

describe('TestGraphQlSchemaResourceResolver', () => {
  let resolver: TestGraphQlSchemaResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TestGraphQlSchemaResourceResolver,
        TestGraphQlSchemaResourceService,
      ],
    }).compile();

    resolver = module.get<TestGraphQlSchemaResourceResolver>(
      TestGraphQlSchemaResourceResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
