import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [TypegooseModule.forFeature([UserModel])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
