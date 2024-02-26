import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {LoginDto} from "./login.dto";

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService) {}

	async login(user: LoginDto) {
		const payload = { username: user.username, sub: user.userId }; // 'sub' je standardní JWT claim pro subjekt (identifikátor) tokenu

		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
