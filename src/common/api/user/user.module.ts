/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { DatabaseModule } from 'src/common/database/database.module';
import { UserController } from "./user.controller";
import { userProviders } from "./user.providers";
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [UserController]
})
export class UserModule { }
