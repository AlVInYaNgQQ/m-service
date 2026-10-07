import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingPageService } from '../../../domain/services/shopping-page.service';
import { ShoppingPageResolver } from './shopping-page.resolver';

describe('ShoppingPageResolver', () => {
  let resolver: ShoppingPageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingPageResolver, ShoppingPageService],
    }).compile();

    resolver = module.get<ShoppingPageResolver>(ShoppingPageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
