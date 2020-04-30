import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as  RateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const limiter = RateLimit({
    windowMs: 30 * 1000, // 30 seconds
    max: 100, // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);
  await app.listen(3000);
}
bootstrap();
