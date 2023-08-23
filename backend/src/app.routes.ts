import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AppController } from './app.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AppController],
  imports: [JwtModule]
})
export class AppRoutes implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(AuthMiddleware).forRoutes('restricted');
  }
}