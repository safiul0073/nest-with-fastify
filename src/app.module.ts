import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UsersModule } from './users/users.module';

import { ProductModule } from './product/product.module';
import { ProductMiddleware } from './product.middleware';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}), PostModule, AuthModule, UsersModule, MongooseModule.forRoot('mongodb+srv://letsbuild:anis5221@cluster0.wzqth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ProductMiddleware)
    .forRoutes("product");
  }
}
