import { InputType, Field, ArgsType, ID } from '@nestjs/graphql';

@InputType({ description: 'The data necessary to create a new Message' })
@ArgsType()
export class UpdateMessageDto {
  @Field()
  description: string;

  @Field(() => ID)
  id: string;
}
