import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSchema } from './pokemon.schema';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }])],
	providers: [PokemonService],
	controllers: [PokemonController],
})
export class PokemonModule {}
