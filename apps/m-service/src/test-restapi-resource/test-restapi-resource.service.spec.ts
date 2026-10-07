import { Test, TestingModule } from '@nestjs/testing';
import { TestRestapiResourceService } from './test-restapi-resource.service';

describe('TestRestapiResourceService', () => {
  let service: TestRestapiResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestRestapiResourceService],
    }).compile();

    service = module.get<TestRestapiResourceService>(
      TestRestapiResourceService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
