import { ProductMiddleware } from './product.middleware';

describe('ProductMiddleware', () => {
  it('should be defined', () => {
    expect(new ProductMiddleware()).toBeDefined();
  });
});
