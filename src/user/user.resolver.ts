import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './user.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  usersThatShouldBeInDb = [
    { id: '1234', username: 'username', password: 'password' },
  ];

  @Query(() => [UserModel])
  users() {
    return this.userService.getAllUsers();
  }

  @Mutation(() => UserModel)
  createUser(@Args('createUser') createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  // @Mutation(() => UserModel)
  // createUser(@Args() createUser: CreateUserDto): Promise<UserModel> {
  //   return this.userService.createUser(createUser);
  // }
}
