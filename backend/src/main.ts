import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS
  app.enableCors({
    origin: 'http://172.19.0.4:3000', // Permitir acesso apenas do frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permitir credenciais se necessário
  });

  await app.listen(5000);
}
bootstrap();
