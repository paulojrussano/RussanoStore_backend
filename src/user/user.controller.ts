import { Body, Controller,  Get,  Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatUser.dto';
import { UserService } from './user.service';
import { User } from './Interfaces/interface';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){

    }

    @Post()
    async creatUser(@Body() creatUser: CreateUserDto):Promise<User>{
       return this.userService.creatUser(creatUser);
    }

    @Get()
    async getAllUser():Promise<User[]>{
        return this.userService.getAllUser();
    }

}
