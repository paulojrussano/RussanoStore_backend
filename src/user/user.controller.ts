import { Body, Controller,  Get,  Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './Interfaces/user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){

    }

    @Post()
    async creatUser(@Body() creatUser: CreateUserDto):Promise<UserEntity>{
       return this.userService.creatUser(creatUser);
    }

    @Get()
    async getAllUser():Promise<UserEntity[]>{
        return this.userService.getAllUser();
    }

}
