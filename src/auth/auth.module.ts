import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.register({
			secret: 'secretKey',
			signOptions: { expiresIn: '60m' },
		}),
	],
	controllers: [AuthController],
	providers: [JwtStrategy, AuthService],
	exports: [JwtModule],
})
export class AuthModule {}
