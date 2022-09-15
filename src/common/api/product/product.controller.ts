/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductEntity } from "src/common/entities/product.entity";
import { ProductService } from "./product.service";

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  //* Creas un producto.
  @Post('newProduct')
  public crear(@Body() data: ProductEntity) {
    return this.productService.crear(data);
  }

  //* Obtienes todos los productos.
  @Get('allproducts')
  public buscar(): Promise<ProductEntity[]>{
    return this.productService.buscar();
  }

  //* Obtienes solo un producto.
  @Get('oneproduct/:id')
  public buscarid(@Param('id', ParseIntPipe) id: number): Promise<ProductEntity | null>{
    return this.productService.buscarid(id);
  }
  
  //* Actualizas un producto.
  @Put(':id')
  public actualizar(@Param('id') id:number,@Body() data: ProductEntity) {
    return this.productService.actualizar(id, data);
  }

  //* Eliminas un producto.
  @Delete(':id')
  public eliminar(@Param('id') id: number) {
    return this.productService.eliminar(id);
  }
}