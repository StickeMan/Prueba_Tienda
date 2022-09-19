import { Module } from '@nestjs/common';
import { ProductModule } from './common/product/product.module';
import { UserModule } from './common/auth/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    UserModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
