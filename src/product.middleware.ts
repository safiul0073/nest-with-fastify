import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ProductMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    
    next();
  }
}
