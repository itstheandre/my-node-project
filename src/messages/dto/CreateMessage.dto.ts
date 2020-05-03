import { InputType, Field, ArgsType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class CreateMessageDto {
  @Field()
  description: string;
}
