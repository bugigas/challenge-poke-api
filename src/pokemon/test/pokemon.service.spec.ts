import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from '../pokemon.service';
import { getModelToken } from '@nestjs/mongoose';
import {Pokemon} from "../entity/pokemon.entity";

describe('PokemonService', () => {
	let service: PokemonService;
	let mockPokemonModel: any;

	beforeEach(async () => {
		mockPokemonModel = {
			find: jest.fn().mockReturnThis(),
			limit: jest.fn().mockReturnThis(),
			skip: jest.fn().mockReturnThis(),
			exec: jest.fn().mockResolvedValue([
				{ name: 'Bulbasaur', type: 'Grass' },
				{ name: 'Charmander', type: 'Fire' },
			]),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				PokemonService,
				{
					provide: getModelToken(Pokemon.name),
					useValue: mockPokemonModel,
				},
			],
		}).compile();

		service = module.get<PokemonService>(PokemonService);
	});

	it('should return all pokemons', async () => {
		const result = await service.findAll({});
		expect(result).toEqual([
			{ name: 'Bulbasaur', type: 'Grass' },
			{ name: 'Charmander', type: 'Fire' },
		]);
		expect(mockPokemonModel.find).toHaveBeenCalled();
	});
});
