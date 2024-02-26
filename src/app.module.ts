import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {PokemonModule} from "./pokemon/pokemon.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      PokemonModule,
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/pokemon'),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
