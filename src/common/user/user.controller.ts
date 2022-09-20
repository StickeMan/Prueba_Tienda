import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserEntity } from "src/common/entities/user.entity";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { UserService } from "./user.service";

@ApiBearerAuth()
@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  //* Creas un usuario.
  @Post('newUser')
  public crear(@Body() data: UserEntity) {
    return this.userService.crearUsuario(data);
  }

  //* Obtienes todos los usuarios.
  @Get('allusers')
  public buscar(): Promise<UserEntity[]> {
    return this.userService.buscarAll();
  }

  //* Obtienes solo un usuario.
  @Get(':username')
  public buscarid(@Param('username') username: string): Promise<UserEntity | null> {
    return this.userService.buscarUno(username);
  }

  //* Actualizas los datos de un usuario.
  @Put(':username')
  public actualizar(@Param('username') username: string, @Body() data: UserEntity) {
    return this.userService.actualizarUsuario(username, data);
  }

  //* Eliminas a un usuario.
  @Delete(':username')
  public eliminar(@Param('username') username: string) {
    return this.userService.eliminarUsuario(username);
  }
}
