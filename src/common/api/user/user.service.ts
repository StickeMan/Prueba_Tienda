import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/common/entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { encodePassword } from 'src/system/utilities/bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  //*Method create.
  public async crearUsuario(dataUser: CreateUserDto) {
    //return this.userRepository.save(data);
    const password = encodePassword(dataUser.password);
    const newUser = this.userRepository.create({...dataUser, password});
    return await this.userRepository.save(newUser);
  }

  //*Method find all.
  public async buscarAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  //*Method find by username.
  public async buscarUno(username: string): Promise<UserEntity> {
    //return this.userRepository.findOneBy({ username });
    const user = await this.userRepository.findOneBy({ username });
    if (user) {
      return user;
    }
    throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
  }

/**
 * //*Method delete.
  public async eliminarUsuario(username: string) {
    //return this.userRepository.delete(username);
    const deleteUser = await this.userRepository.delete(username);
    if (!deleteUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  //*Method update.
  public async actualizarUsuario(username: string, data: UserEntity) {
    //return this.userRepository.update({ username: username }, data)
    await this.userRepository.update(username, data);
    const updateUser = await this.userRepository.findOneBy({ username });
    if (updateUser) {
      return updateUser;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
 */
}
