import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

//TODO POST - Localhost/auth
@ApiTags('auth')
@Controller('auth')
export class AtuhController {
  constructor(private readonly authService: AuthService) { }

  //TODO Register.
  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.authService.registrarUsuario(userObject);
    //console.log({body: userObject});
  }

  //TODO Login.
  @Post('login')
  loginUser(@Body() userObjectLogin: LoginAuthDto) {
    return this.authService.loginUsuario(userObjectLogin);
  }
}
