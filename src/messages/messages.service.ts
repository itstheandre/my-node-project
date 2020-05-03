import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Messages } from './messages.model';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { CreateMessageDto } from './dto/CreateMessage.dto';
import { cleanId } from 'src/helpers/cleanId';
import { UpdateMessageDto } from './dto/UpdateMessage.dto';

type MessageDoc = DocumentType<Messages>;

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Messages)
    private readonly messageModel: ReturnModelType<typeof Messages>,
  ) {}

  async getAllMessages() {
    const allMessages = await this.messageModel.find({});
    return allMessages.map(el => cleanId(el));
  }

  async deleteAllMessages(): Promise<string> {
    const deleteAll = await this.messageModel.deleteMany({});
    console.log('deleteAll:', deleteAll);
    return 'hey there';
  }

  async createMessage(createMessage: CreateMessageDto) {
    const newTask = await this.messageModel.create(createMessage);
    console.log('newTask:', { ...newTask.toJSON() });
    return cleanId(newTask);
  }

  async updateMessage({ id, description }: UpdateMessageDto) {
    const updateTask = await this.messageModel.findByIdAndUpdate(
      id,
      { description },
      { new: true },
    );
    console.log('updateTask:', updateTask);
    return cleanId(updateTask);
  }
}
