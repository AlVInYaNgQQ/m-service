import { Test, TestingModule } from '@nestjs/testing';
import { TestGraphQlCodeResourceResolver } from './test-graph-ql-code-resource.resolver';
import { TestGraphQlCodeResourceService } from './test-graph-ql-code-resource.service';

describe('TestGraphQlCodeResourceResolver', () => {
  let resolver: TestGraphQlCodeResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TestGraphQlCodeResourceResolver,
        TestGraphQlCodeResourceService,
      ],
    }).compile();

    resolver = module.get<TestGraphQlCodeResourceResolver>(
      TestGraphQlCodeResourceResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
