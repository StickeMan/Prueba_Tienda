import { Module } from '@nestjs/common';
import { ProductModule } from './common/api/product/product.module';
import { UserModule } from './common/api/user/user.module';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
