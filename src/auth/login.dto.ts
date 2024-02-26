import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
	@ApiProperty({ example: '1', description: 'user id' })
	userId: string;

	@ApiProperty({ example: 'tomas', description: 'username' })
	username: string;
}
