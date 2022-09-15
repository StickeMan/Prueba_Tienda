/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/common/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: Repository<ProductEntity>
  ) { }

  //*Method create.
  public crear(data: ProductEntity) {
    return this.productRepository.save(data);
  }

  //*Method find all.
  public async buscar() {
    return await this.productRepository.find();
  }

  //*Method find by id.
  public buscarid(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  //*Method delete.
  public eliminar(id: number) {
    return this.productRepository.delete(id);
  }

  //*Method update.
  public actualizar(id: number, data: ProductEntity) {
    return this.productRepository.update({ id: id }, data)
  }
}
