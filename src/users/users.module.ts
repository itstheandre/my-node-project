import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
