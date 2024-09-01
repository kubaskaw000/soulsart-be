import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entity/users/User';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(signInDto.email);

    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto): Promise<User> {
    const passwordMatched = signUpDto.password === signUpDto.rePassword;
    const userExist = await this.usersService.findOne(signUpDto.email);

    if (!!userExist || !passwordMatched) {
      throw new UnauthorizedException();
    }

    const user = await this.usersService.create(signUpDto);

    return user;
  }
}
