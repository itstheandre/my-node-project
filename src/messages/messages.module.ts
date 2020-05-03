import { Module } from '@nestjs/common';
import { MessagesResolver } from './messages.resolver';
import { TypegooseModule } from 'nestjs-typegoose';
import { Messages } from './messages.model';
import { MessagesService } from './messages.service';

@Module({
  imports: [TypegooseModule.forFeature([Messages])],
  providers: [MessagesResolver, MessagesService],
})
export class MessagesModule {}
