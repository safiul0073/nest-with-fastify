
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDto } from './users.dto';
import {Users} from './users.model'
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<Users>){}
  private readonly users = [
    {
      userId: 1,
      email: 'parsonal494@gmial.com',
      username: 'example@gmail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'parsonal495@gmial.com',
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({username: username});
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      password: user.password,

    };
  }


  async addUser(userDto: UsersDto) {
    const user = await new this.userModel(userDto)
    await user.save();
    return user;
  }

  async getOne(username: string) {
     const user = await this.userModel.findOne({username: username});
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      password: user.password,

    };
  }
}