import { PartialType } from "@nestjs/swagger";
import { LoginAuthDto } from "./login-auth.dto";

export class RegisterAuthDto extends PartialType(LoginAuthDto) {

  name: string;

  username: string;

  email: string;

  password: string;
}
