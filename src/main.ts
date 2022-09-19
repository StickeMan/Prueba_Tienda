import { NestFactory } from '@nestjs/core';
import { SERVER_PORT } from './system/config/config';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  //*Server port
  const port = configService.get<number>(SERVER_PORT) || 3000;
  await app.listen(port);
  console.log(`Listening on port ${await app.getUrl()}`)
  //TODO: 'http://localhost:8080'
}
bootstrap();
