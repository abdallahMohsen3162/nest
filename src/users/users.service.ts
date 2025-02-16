import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  getUsers() {
    return this.users;
  }

  getSingleUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: any) {
    this.users.push(user);
    return user;
  }

}
