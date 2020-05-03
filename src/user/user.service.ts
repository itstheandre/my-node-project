import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { CreateUserDto } from './dto/CreateUser.dto';
import { cleanId } from 'src/helpers/cleanId';

type UserDoc = DocumentType<UserModel>;

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: ReturnModelType<typeof UserModel>,
  ) {}

  async createUser(createUser: CreateUserDto) {
    const newUser = await this.userModel.create(createUser);
    console.log('newUser:', newUser);
    return cleanId(newUser);
  }

  async getAllUsers() {
    const allUsers = await this.userModel.find({});
    return allUsers.map((el: UserDoc) => cleanId(el));
  }
}
