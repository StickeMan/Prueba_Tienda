import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductEntity } from "src/common/entities/product.entity";
import { ProductDto } from "./dto/producto.dto";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  //* Creas un producto.
  @Post('newProduct')
  public async create(@Body() dataProducto: ProductDto) {
    return await this.productService.crearProducto(dataProducto);
  }

  //* Obtienes todos los productos.
  @Get()
  public async get(): Promise<ProductEntity[]>{
    return await this.productService.buscarAll();
  }

  //* Obtienes solo un producto por ID.
  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<ProductEntity | null>{
    return await this.productService.buscarid(id);
  }

  //*Obtener solo un producto por nombre.
  @Get(':name')
  public async getName(@Param('name') name: string): Promise<ProductEntity | null> {
    return await this.productService.buscarName(name);
  }
  
  //* Actualizas un producto.
  @Put(':id')
  public async update(@Param('id', ParseIntPipe) id: number, @Body() dataProducto: ProductDto) {
    return await this.productService.actualizar(id, dataProducto);
  }

  //* Eliminas un producto.
  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.eliminar(id);
  }
}
