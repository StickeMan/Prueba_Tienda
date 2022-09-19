import { DataSource } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
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
      database: 'Tienda1',
      entities: [UserEntity, ProductEntity],
      synchronize: true,
    });

    return dataSource.initialize();
  },
};
