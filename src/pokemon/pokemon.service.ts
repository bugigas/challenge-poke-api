import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from './pokemon.interface';

@Injectable()
export class PokemonService {
	constructor(@InjectModel('Pokemon') private readonly pokemonModel: Model<Pokemon>) {}

	async findAll(query: any): Promise<Pokemon[]> {
		const { page = 1, limit = 10, name, type } = query;
		const filters = {};
		if (name) filters['name'] = new RegExp(name, 'i'); // case-insensitive search
		if (type) filters['type'] = type;

		return this.pokemonModel
			.find(filters)
			.limit(limit * 1)
			.skip((page - 1) * limit)
			.exec();
	}

	async findOne(id: string): Promise<Pokemon> {
		return this.pokemonModel.findById(id).exec();
	}

	async findByName(name: string): Promise<Pokemon> {
		return this.pokemonModel.findOne({ name: new RegExp(`^${name}$`, 'i') }).exec();
	}

	async findAllTypes(): Promise<string[]> {
		const pokemons = await this.pokemonModel.find().distinct('type').exec();
		return pokemons.flat();
	}
}
