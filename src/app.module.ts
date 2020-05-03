import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
      resolverValidationOptions: { requireResolversForResolveType: false },
      context: ({ req }) => ({ req, test: 'test' }),
    }),
    TypegooseModule.forRoot('mongodb://localhost/graphql-nest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MessagesModule,
    UserModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
