import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const port = parseInt(process.env.PORT, 10) || 3000;

  const logger = new Logger();
  logger.log(`Listening on port: ${port}`);

  await app.listen(port);
}

bootstrap();
