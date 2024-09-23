import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {LoginDto} from "./login.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}


	
	@Post('login')
	@ApiOperation({ summary: 'User login and return access token.' })
	async login(@Body() loginUserDto: LoginDto) {
		return this.authService.login(loginUserDto);
	}
}
