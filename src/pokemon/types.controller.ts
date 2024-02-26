import {Controller, Get} from "@nestjs/common";
import {PokemonService} from "./pokemon.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('types')
@Controller('types')
export class TypesController {
	constructor(private pokemonService: PokemonService) {}

	@Get()
	@ApiOperation({ summary: 'Find all pokemons types.' })
	findAllTypes() {
		return this.pokemonService.findAllTypes();
	}
}
