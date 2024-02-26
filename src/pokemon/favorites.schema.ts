import * as mongoose from 'mongoose';

export const FavoriteSchema = new mongoose.Schema({
	userId: String,
	pokemonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon', required: true },
});
