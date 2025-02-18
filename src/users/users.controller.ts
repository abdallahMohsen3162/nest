import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
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

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    console.log(id);
    
    try {
      this.usersService.deleteUser(+id);
      return { message: 'User deleted successfully' };
    } catch (error) {
      return { message: 'Error deleting user' };
    }
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Req() req: Request) {
    try {
      const { name, email } = req.body;
      this.usersService.updateUser(+id, { name, email });
      return { message: 'User updated successfully' };
    } catch (error) {
      return { message: 'Error updating user' };
    }
  }

  

}

