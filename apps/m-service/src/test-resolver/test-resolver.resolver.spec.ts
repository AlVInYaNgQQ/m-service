import { Test, TestingModule } from '@nestjs/testing';
import { TestResolverResolver } from './test-resolver.resolver';

describe('TestResolverResolver', () => {
  let resolver: TestResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestResolverResolver],
    }).compile();

    resolver = module.get<TestResolverResolver>(TestResolverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
