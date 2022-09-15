/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { UserEntity } from 'src/common/entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  }
]
