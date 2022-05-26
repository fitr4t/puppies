import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './puppies.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Puppies Api')
  .setDescription('The Puppies Api')
  .setVersion('1.0')
  .addTag('Puppies')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs',app, document);
  
  await app.listen(3000);
}
bootstrap();
