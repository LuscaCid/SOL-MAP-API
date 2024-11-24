import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import "dotenv/config";
const fs = require('fs');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableCors({origin : "*"});
  
  const config = new DocumentBuilder()
  .setTitle('SOL-api')
  .setDescription('API documentada para o SOL')
  .setVersion('1.2')
  .addTag('SOL (Sistema de Orientação e Localização)')
  .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //escrita do arquivo de configuracoes da api para documentacao externalizada.
  fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
