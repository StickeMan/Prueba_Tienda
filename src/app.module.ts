import { Module } from '@nestjs/common';
import { ProductModule } from './common/api/product/product.module';
import { UserModule } from './common/api/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    UserModule,
    ProductModule
  ],
})
export class AppModule {}
