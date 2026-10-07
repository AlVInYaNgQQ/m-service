import { Test, TestingModule } from '@nestjs/testing';
import { TestMicroserviceResourceService } from './test-microservice-resource.service';

describe('TestMicroserviceResourceService', () => {
  let service: TestMicroserviceResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestMicroserviceResourceService],
    }).compile();

    service = module.get<TestMicroserviceResourceService>(
      TestMicroserviceResourceService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
