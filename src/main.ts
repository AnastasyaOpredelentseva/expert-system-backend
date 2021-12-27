import { NestFactory } from '@nestjs/core';
import 'dotenv/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const currentPort = process.env.PORT ?? 3000;

  await app.listen(currentPort);
}
bootstrap();
