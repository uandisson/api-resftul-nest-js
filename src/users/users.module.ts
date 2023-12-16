import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UniqueEmailValidator } from './unique-email.validator';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UniqueEmailValidator],
  controllers: [UsersController],
})
export class UsersModule {}
