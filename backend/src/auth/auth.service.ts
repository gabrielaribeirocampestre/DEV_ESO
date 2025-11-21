
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwt: JwtService) {}

  async login(dto: LoginDto) {
    const user = await this.users.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const valid = await argon2.verify(user.password, dto.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const token = await this.jwt.signAsync({ sub: user.id });
    return { token, user };
  }

  async register(dto: RegisterDto) {
    const passwordHash = await argon2.hash(dto.password);
    const newUser = await this.users.create({
      ...dto,
      password: passwordHash,
    });
    const token = await this.jwt.signAsync({ sub: newUser.id });
    return { token, user: newUser };
  }
}
