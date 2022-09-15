/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/common/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  //*Method create.
  public crear(data: UserEntity) {
    return this.userRepository.save(data);
  }

  //*Method find all.
  public async buscar() {
    return await this.userRepository.find();
  }

  //*Method find by id.
  public buscarid(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  //*Method delete.
  public eliminar(id: number) {
    return this.userRepository.delete(id);
  }

  //*Method update.
  public actualizar(id: number, data: UserEntity) {
    return this.userRepository.update({ id: id }, data)
  }
}
