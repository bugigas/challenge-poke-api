import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite } from './favorite.interface';

@Injectable()
export class FavoritesService {
	constructor(@InjectModel('Favorite') private readonly favoriteModel: Model<Favorite>) {}

	async addFavorite(userId: string, pokemonId: string): Promise<Favorite> {
		const newFavorite = new this.favoriteModel({ userId, pokemonId });
		return newFavorite.save();
	}

	async removeFavorite(userId: string, pokemonId: string): Promise<Favorite> {
		const favorite = await this.favoriteModel.findOneAndDelete({ userId, pokemonId }).exec();
		if (!favorite) {
			throw new NotFoundException('Favorite not found');
		}
		return favorite;
	}

	async findFavoritesByUserId(userId: string): Promise<Favorite[]> {
		return this.favoriteModel.find({ userId }).populate('pokemonId').exec();
	}
}
