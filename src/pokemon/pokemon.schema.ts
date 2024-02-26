import * as mongoose from 'mongoose';

export const PokemonSchema = new mongoose.Schema({
	name: String,
	type: [String],
	statistics: {
		hp: Number,
		attack: Number,
		defense: Number,
	},
	favorites: [String],
});
