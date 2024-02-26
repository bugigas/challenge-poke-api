import { Controller, Get, Query, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemons')
export class PokemonController {
	constructor(private readonly pokemonService: PokemonService) {}

	@Get()
	findAll(@Query() query: { page?: number; limit?: number; name?: string; type?: string; favorite?: boolean }) {
		return this.pokemonService.findAll(query);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.pokemonService.findOne(id);
	}

	@Get(':name')
	findByName(@Param('name') name: string) {
		return this.pokemonService.findByName(name);
	}
}
