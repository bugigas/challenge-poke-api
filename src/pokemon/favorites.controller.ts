import { Controller, Post, Delete, Param, UseGuards, Req } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiBearerAuth('access-token')
@ApiTags('favorites')
@Controller('favorites')
export class FavoritesController {
	constructor(private readonly favoritesService: FavoritesService) {}

	@UseGuards(JwtAuthGuard)
	@Post(':pokemonId')
	@ApiOperation({ summary: 'Add favorite pokemon by pokemonId to user.' })
	addFavorite(@Req() req, @Param('pokemonId') pokemonId: string) {
		return this.favoritesService.addFavorite(req.user.id, pokemonId);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':pokemonId')
	@ApiOperation({ summary: 'Delete favorite pokemon by pokemonId for user.' })
	removeFavorite(@Req() req, @Param('pokemonId') pokemonId: string) {
		return this.favoritesService.removeFavorite(req.user.id, pokemonId);
	}

}
