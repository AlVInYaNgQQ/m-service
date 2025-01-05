import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(process.env.port ?? 3000);
  new Logger('Initial').log(
    `Application is running on: ${await app.getUrl()}/graphql`,
  );
}
bootstrap();
