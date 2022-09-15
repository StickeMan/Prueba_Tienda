/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserEntity } from "src/common/entities/user.entity";
import { UserService } from "./user.service";

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  //* Creas un usuario.
  @Post('newUser')
  public crear(@Body() data: UserEntity) {
    return this.userService.crear(data);
  }

  //* Obtienes todos los usuarios.
  @Get('allusers')
  public buscar(): Promise<UserEntity[]>{
    return this.userService.buscar();
  }

  //* Obtienes solo un usuario.
  @Get('oneuser/:id')
  public buscarid(@Param('id', ParseIntPipe) id: number): Promise<UserEntity | null>{
    return this.userService.buscarid(id);
  }
  
  //* Actualizas los datos de un usuario.
  @Put(':id')
  public actualizar(@Param('id') id:number,@Body() data: UserEntity) {
    return this.userService.actualizar(id, data);
  }

  //* Eliminas a un usuario.
  @Delete(':id')
  public eliminar(@Param('id') id: number) {
    return this.userService.eliminar(id);
  }
}
