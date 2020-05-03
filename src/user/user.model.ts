import { ObjectType, Field, ID } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field()
  @prop()
  username: string;

  // @Field()
  @prop()
  password: string;
}

//   @prop({ unique: true })
