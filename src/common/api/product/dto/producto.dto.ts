import { IsNotEmpty, IsNumber, IsString, IsDate, IsBoolean } from "class-validator";

export class ProductDto {

  @IsNotEmpty({message: 'El nombre no puede estar vacío'})
  @IsString()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNumber()
  IVA: number;

  @IsNumber()
  no_IVA: number;

  @IsDate()
  expiration_date: Date;

  @IsString()
  Notes: string;

  @IsNumber()
  stock: number;

  @IsBoolean()
  isActive: boolean;
}
