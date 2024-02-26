import * as mongoose from 'mongoose';

export const FavoriteSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	pokemonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon', required: true },
});
