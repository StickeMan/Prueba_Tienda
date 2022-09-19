import { IsNotEmpty, IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  //TODO: Validaciones.

  @IsNotEmpty({message: 'El nombre no puede estar vacío'})
  @IsString()
  name: string;

  @IsNotEmpty({message: 'El username no puede estar vacío'})
  @Length(4, 30)
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({message: 'La contraseña del usuario no puede estar vacío'})
  @Length(8)
  password: string;
}
