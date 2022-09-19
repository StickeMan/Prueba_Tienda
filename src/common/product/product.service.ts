import { Injectable, Inject, HttpException, HttpStatus, BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/common/entities/product.entity';
import { ProductDto } from './dto/producto.dto';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<ProductEntity>
  ) { }

  //*Method create.
  public async crearProducto(dataProduct: ProductDto): Promise<any> {
    //return this.productRepository.save(dataProduct);
    const exists = await this.buscarName(dataProduct.name);
    if (exists) throw new BadRequestException(new MessageDto('Ese nombre ya existe'));
    const producto = this.productRepository.create(dataProduct);
    await this.productRepository.save(producto);
    return new MessageDto(`Producto ${producto.name} creado!`);
  }

  //*Method find all.
  public async buscarAll(): Promise<ProductEntity[]> {
    //return await this.productRepository.find();
    const list = await this.productRepository.find();
    if (!list.length) {
      throw new HttpException('Lista no encontrada', HttpStatus.NOT_FOUND);
    }
    return list;
  }

  //*Method find by id.
  public async buscarid(id: number): Promise<ProductEntity | null> {
    //return this.productRepository.findOneBy({ id });
    const producto = await this.productRepository.findOneBy({ id });
    if (!producto) {
      throw new HttpException('Producto no encontrado en la lista', HttpStatus.NOT_FOUND);
    }
    return producto;
  }

  //*Method find by name.
  public async buscarName(name: string): Promise<ProductEntity | null> {
    const producto = await this.productRepository.findOneBy({ name: name });
    return producto;
  }

  //*Method delete.
  public async eliminar(id: number): Promise<any> {
    //return this.productRepository.delete(id);
    await this.productRepository.delete(id);
    return new MessageDto(`Producto ${id} eliminado!`);
  }

  //*Method update.
  public async actualizar(id: number, dataProduct: ProductDto): Promise<any> {
    //return this.productRepository.update({ id: id }, data)
    const producto = await this.buscarid(id);
    if (!producto) throw new NotFoundException(new MessageDto('no existe'));
    const exists = await this.buscarName(dataProduct.name);
    if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('ese producto ya existe'));
    dataProduct.name ? producto.name = dataProduct.name : producto.name = producto.name;
    dataProduct.precio ? producto.precio = dataProduct.precio : producto.precio = producto.precio;
    await this.productRepository.save(producto);
    return new MessageDto(`Producto ${producto.name} actualizado!`);
  }
}
