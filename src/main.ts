import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import "dotenv/config"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableCors({origin : "*"});
  
  const config = new DocumentBuilder()  
  .setTitle('TablesBuilder')
  .setDescription('API documentada para o TablesBuilder')
  .setVersion('1.0')
  .addTag('api-tables-builder')
  .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
