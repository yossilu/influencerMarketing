import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
const cors = require('cors');

const allowedOrigins = [
  'http://127.0.0.1:4200',
  'http://localhost:4200',
];

const corsOptions = {
  origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  optionsSuccessStatus: 200,
  credentials: true
}

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
