import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSchema } from './schemas/pokemon.schema';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import {FavoritesService} from "./favorites.service";
import {TypesController} from "./types.controller";
import {FavoritesController} from "./favorites.controller";
import {FavoriteSchema} from "./schemas/favorites.schema";

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }]), MongooseModule.forFeature([{ name: 'Favorite', schema: FavoriteSchema }])],
	providers: [PokemonService, FavoritesService],
	controllers: [PokemonController, TypesController, FavoritesController],
})
export class PokemonModule {}
