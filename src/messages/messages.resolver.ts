import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Messages } from './messages.model';
import { CreateMessageDto } from './dto/CreateMessage.dto';
import { UpdateMessageDto } from './dto/UpdateMessage.dto';
import { MessagesService } from './messages.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/Gql.guard';
import { CurrentUser } from 'src/auth/CurrentUser';

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
  createMessage(@Args('createTask') createMessage: CreateMessageDto) {
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

  @Query(() => String)
  @UseGuards(GqlAuthGuard)
  getContext(@CurrentUser() user: any) {
    console.log('user:', user);
    return 'je;;p';
  }
}
