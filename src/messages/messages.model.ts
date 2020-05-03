import { ObjectType, Field, ID } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';

@ObjectType()
export class Messages {
  @Field(() => ID)
  id: string;

  @Field()
  @prop()
  description: string;
}
