import { Args, Resolver, Mutation, Field } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/CreateUser.dto';
import { ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/user/user.model';

// TODO: extract this
@ObjectType()
class LoginReturnType extends UserModel {
  @Field()
  accessToken: string;
}

@Resolver()
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Mutation(() => LoginReturnType)
  // TODO: create a LoginUserDto
  async login(@Args('input') input: CreateUserDto) {
    const user = await this.auth.validateUser(input.username, input.password);
    if (!user) {
      throw new Error('Invalid username/password');
    }
    const accessToken = await this.auth.login(user);

    return { ...user, id: user.userId, ...accessToken };
  }
}
