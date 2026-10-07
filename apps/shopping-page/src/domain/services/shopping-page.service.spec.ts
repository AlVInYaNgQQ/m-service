import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingPageService } from './shopping-page.service';

describe('ShoppingPageService', () => {
  let service: ShoppingPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingPageService],
    }).compile();

    service = module.get<ShoppingPageService>(ShoppingPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
