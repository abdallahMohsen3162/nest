import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

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
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))

  createUser(@Body() createUserDto: CreateUserDto) {
    try {

      this.usersService.createUser(createUserDto);
      return { user:createUserDto };
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


  @Post('test')
  test(@Req() req: Request) {
    console.log(req.body);
    
    return {
      message: 'POST request received',
      data: req.body,
    };
  }

  

}

