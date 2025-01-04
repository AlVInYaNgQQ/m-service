import { Test, TestingModule } from '@nestjs/testing';
import { TestGraphQlCodeResourceService } from './test-graph-ql-code-resource.service';

describe('TestGraphQlCodeResourceService', () => {
  let service: TestGraphQlCodeResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGraphQlCodeResourceService],
    }).compile();

    service = module.get<TestGraphQlCodeResourceService>(TestGraphQlCodeResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
