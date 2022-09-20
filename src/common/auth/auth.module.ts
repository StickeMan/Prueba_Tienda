import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '../database/database.module';
import { AtuhController } from './auth.controller';
import { authProviders } from './auth.providers';
import { AuthService } from './auth.service';
import { jwtConstants } from './jwt/constants';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '20h' },
    }),
  ],
  controllers: [AtuhController],
  providers: [
    ...authProviders,
    AuthService,
    JwtStrategy
  ]
})
export class AuthModule { }
