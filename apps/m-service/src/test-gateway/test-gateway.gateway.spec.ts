import { Test, TestingModule } from '@nestjs/testing';
import { TestGatewayGateway } from './test-gateway.gateway';

describe('TestGatewayGateway', () => {
  let gateway: TestGatewayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGatewayGateway],
    }).compile();

    gateway = module.get<TestGatewayGateway>(TestGatewayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
