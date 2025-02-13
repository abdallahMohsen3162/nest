import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  private readonly users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  @Get()
  getUsers() {
    
    return this.users;
  }

  @Get(":id")
  getUser(@Param('id') id: string) {
    try {
      console.log(id, typeof id);
      
      return this.users.find((user) => user.id == +id);
    } catch (error) {
      return {};
    }
    // return this.users.find((user) => user.id === userId);
  }

  @Post()
  createUser(@Req() req: Request) {
    try {
      const { name, email } = req.body;
      this.users.push({ id: this.users.length + 1, name, email });
      return { id: this.users.length, name, email };
    } catch (error) {
      throw error;
    }
  }
  

}

