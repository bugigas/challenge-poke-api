import {Controller, Get, Query, Param, UseGuards} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('pokemons')
@Controller('pokemons')
export class PokemonController {
	constructor(private readonly pokemonService: PokemonService) {}


	@Get()
	@ApiOperation({ summary: 'Find all pokemons with pagination.' })
	findAll(@Query() query: { page?: number; limit?: number; name?: string; type?: string; favorite?: boolean }) {
		return this.pokemonService.findAll(query);
	}

	@Get('/:id')
	@ApiOperation({ summary: 'Get pokemon by id.' })
	findOne(@Param('id') id: string) {
		return this.pokemonService.findOne(id);
	}

	@Get('/name/:name')
	@ApiOperation({ summary: 'Get pokemon by name.' })
	findByName(@Param('name') name: string) {
		return this.pokemonService.findByName(name);
	}
}
