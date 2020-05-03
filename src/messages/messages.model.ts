import { ObjectType, Field, ID } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { UserModel } from 'src/user/user.model';

@ObjectType()
export class Messages {
  @Field(() => ID)
  id: string;

  @Field()
  user: UserModel;

  @Field()
  @prop()
  description: string;
}
