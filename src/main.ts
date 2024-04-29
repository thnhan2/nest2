import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';
import * as hbs from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));

  // Define and register a helper function

  app.engine(
    'hbs',
    hbs({
      extname: 'hbs',
      defaultLayout: '',
      helpers: {
        eq: function (v1, v2) {
          return v1 === v2;
        },
      },
    }),
  );

  app.setViewEngine('hbs');
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
