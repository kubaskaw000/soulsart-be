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

  async signIn(signInDto, response): Promise<{ access_token: string; userId }> {
    const user = await this.usersService.findOne(signInDto.email);

    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { user };
    const token = await this.jwtService.signAsync(payload);

    response.cookie('Authorization', token, {
      httpOnly: true,
      // secure: false,
      // expires: 3500,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      domain: 'localhost',
      // sameSite: 'none',
    });

    return {
      access_token: token,
      userId: user.id,
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
