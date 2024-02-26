import { Controller, Post, Delete, Param, UseGuards, Req } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('favorites')
export class FavoritesController {
	constructor(private readonly favoritesService: FavoritesService) {}

	@UseGuards(JwtAuthGuard)
	@Post(':pokemonId')
	addFavorite(@Req() req, @Param('pokemonId') pokemonId: string) {
		return this.favoritesService.addFavorite(req.user.id, pokemonId);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':pokemonId')
	removeFavorite(@Req() req, @Param('pokemonId') pokemonId: string) {
		return this.favoritesService.removeFavorite(req.user.id, pokemonId);
	}

}
