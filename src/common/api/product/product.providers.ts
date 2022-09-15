/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ProductEntity } from 'src/common/entities/product.entity';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductEntity),
    inject: ['DATA_SOURCE'],
  }
]