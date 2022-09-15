/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { DatabaseModule } from 'src/common/database/database.module';
import { ProductController } from "./product.controller";
import { productProviders } from "./product.providers";
import { ProductService } from "./product.service";

@Module({
  imports: [DatabaseModule],
  providers: [
    ...productProviders,
    ProductService,
  ],
  controllers: [ProductController]
})
export class ProductModule { }