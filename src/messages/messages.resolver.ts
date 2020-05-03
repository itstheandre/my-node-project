import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Messages } from './messages.model';
import { CreateMessageDto } from './dto/CreateMessage.dto';
import { UpdateMessageDto } from './dto/UpdateMessage.dto';
import { MessagesService } from './messages.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/Gql.guard';
import { CurrentUser } from 'src/auth/CurrentUser';
import { UserModel } from 'src/user/user.model';

@Resolver(() => Messages)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  messagesThatShouldBeInDb = [
    { id: 0, description: 'The seedmessage' },
    { id: 1, description: 'Another One' },
    { id: 2, description: 'The Third' },
  ];

  @Query(() => [Messages])
  messages() {
    return this.messagesService.getAllMessages();
  }

  @Mutation(() => Messages)
  @UseGuards(GqlAuthGuard)
  createMessage(
    @CurrentUser() user: UserModel,
    @Args('createTask') createMessage: CreateMessageDto,
  ) {
    console.log('creating message, here is user:', user);

    // TODO: messagesService.createMessage should take in user as parameter?
    return this.messagesService.createMessage(createMessage);
  }

  @Mutation(() => Messages)
  updateMessage(@Args('updateMessage') input: UpdateMessageDto) {
    return this.messagesThatShouldBeInDb[0];
  }

  @Mutation(() => String)
  deleteAllMessages() {
    return this.messagesService.deleteAllMessages();
  }
}
