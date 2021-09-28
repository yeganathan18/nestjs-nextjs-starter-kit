import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

import { PersonModule } from './app/person/person.module';
import { HobbyModule } from './app/hobby/hobby.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@test-cluster.9mejc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    PersonModule,
    HobbyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
