import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	async login(@Body() loginUserDto: { userId: string; username: string }) {
		return this.authService.login(loginUserDto);
	}
}
