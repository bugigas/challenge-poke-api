import { Document } from 'mongoose';

export interface Favorite extends Document {
	userId: string;
	pokemonId: string;
}
