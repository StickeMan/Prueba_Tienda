import { DataSource } from 'typeorm';
import { UserEntity } from 'src/common/entities/user.entity';

export const authProviders = [
  {
    provide: 'AUTH_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  }
]
