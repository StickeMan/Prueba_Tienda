/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export const DATA_SOURCE = 'DATA_SOURCE';

export const databaseProviders = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      //* Conexion a la base de datos (postgresSQL).
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ocsicnarf10',
      database: 'postgres',
      entities: [UserEntity],
      synchronize: true,
    });

    return dataSource.initialize();
  },
};
