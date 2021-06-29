import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from '../../app/middlewares/logger.middleware';
import { UploadController } from 'src/app/controllers/upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AddressService } from 'src/domain/services/address.service';
import { AddressProvider } from '../providers/address.provider';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: 'uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  ],
  providers: [AddressService, ...AddressProvider],
  exports: [...AddressProvider],
  controllers: [UploadController],
})
export class UploadModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('upload');
  }
}
