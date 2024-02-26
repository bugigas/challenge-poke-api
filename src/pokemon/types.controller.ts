import {Controller, Get} from "@nestjs/common";
import {PokemonService} from "./pokemon.service";

@Controller('types')
export class TypesController {
	constructor(private pokemonService: PokemonService) {}

	@Get()
	findAllTypes() {
		return this.pokemonService.findAllTypes();
	}
}
