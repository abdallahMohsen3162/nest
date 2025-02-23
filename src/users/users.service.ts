import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user';


@Injectable()
export class UsersService {
  private readonly users : User[] = [];

  getUsers() {
    return this.users;
  }

  getSingleUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: CreateUserDto) {
    this.users.push({...user, id: this.users.length + 1});
    return user;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
  updateUser(id: number, user: any) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

}
