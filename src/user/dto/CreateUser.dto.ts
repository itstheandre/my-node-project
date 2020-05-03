import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'Data to create User' })
export class CreateUserDto {
  @Field()
  password: string;

  @Field()
  username: string;
}
