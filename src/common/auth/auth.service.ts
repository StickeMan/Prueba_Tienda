import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { RegisterAuthDto } from "./dto/register-auth.dto";
import { LoginAuthDto } from "./dto/login-auth.dto";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private readonly authRepository: Repository<UserEntity>,
    private jwService: JwtService
  ) { }

  public async registrarUsuario(userObject: RegisterAuthDto) {
    const salt = await bcrypt.genSalt();

    const { password } = userObject;
    const plainToHash = await hash(password, salt);
    userObject = { ...userObject, password: plainToHash};
    return this.authRepository.save(userObject);
  }

  public async loginUsuario(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin;
    const findUser = await this.authRepository.findOneBy({ email });
    if (!findUser) throw new HttpException('Usuario no encontrado!', 404);

    const checkPassword = compare(password, findUser.password);
    
    if (!checkPassword) throw new HttpException('Contraseña invalida!', 403);

    const payload = { id: findUser.id, name: findUser.name };
    const token = this.jwService.sign(payload);

    const data = {
      user: findUser,
      token,
    };
    return data;
  }
}
