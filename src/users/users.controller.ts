import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService :UsersService){}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(":id")
  getUser(@Param('id') id: string) {
    try {
      console.log(id, typeof id);
      
      return this.usersService.getSingleUser(+id);
    } catch (error) {
      return {};
    }
  }

  @Post()
  createUser(@Req() req: Request) {
    try {
      const { name, email } = req.body;
      this.usersService.createUser({ id: this.usersService.getUsers().length + 1, name, email });
      return { id: this.usersService.getUsers().length, name, email };
    } catch (error) {
      throw error;
    }
  }
  

}

