import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {PokemonModule} from "./pokemon/pokemon.module";

@Module({
  imports: [
      PokemonModule,
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/pokemon'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
