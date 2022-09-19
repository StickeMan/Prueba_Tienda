import { IsNotEmpty, IsNumber, IsString, IsDate, IsBoolean, IsDecimal } from "class-validator";

export class ProductDto {

  @IsNotEmpty({message: 'El nombre no puede estar vacío'})
  @IsString()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsDecimal()
  IVA: number;

  @IsDecimal()
  no_IVA: number;

  createdAt: Date;

  expiration_date: Date;

  @IsString()
  Notes: string;

  @IsNumber()
  stock: number;

  @IsBoolean()
  isActive: boolean;
}
