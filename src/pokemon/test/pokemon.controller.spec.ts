import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from '../pokemon.controller';
import { PokemonService } from '../pokemon.service';

describe('PokemonController', () => {
	let controller: PokemonController;
	let service: PokemonService;

	beforeEach(async () => {
		const mockPokemonService = {
			findAll: jest.fn().mockResolvedValue([
				{ name: 'Bulbasaur', type: 'Grass' },
				{ name: 'Charmander', type: 'Fire' },
			]),
		};

		const module: TestingModule = await Test.createTestingModule({
			controllers: [PokemonController],
			providers: [{ provide: PokemonService, useValue: mockPokemonService }],
		}).compile();

		controller = module.get<PokemonController>(PokemonController);
		service = module.get<PokemonService>(PokemonService);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('should return all pokemons', async () => {
		const result = await controller.findAll({});
		expect(result).toEqual([
			{ name: 'Bulbasaur', type: 'Grass' },
			{ name: 'Charmander', type: 'Fire' },
		]);
		expect(service.findAll).toBeCalled();
	});
});
