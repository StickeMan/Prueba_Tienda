import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SERVER_PORT } from './system/config/config';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //TODO Habilata los cors.
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
  })

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('My API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  const configService = app.get(ConfigService);
  //*Server port
  const port = configService.get<number>(SERVER_PORT) || 3000;
  await app.listen(port);
  console.log(`Listening on port ${await app.getUrl()}`)
  //TODO: 'http://localhost:8080'
}
bootstrap();
