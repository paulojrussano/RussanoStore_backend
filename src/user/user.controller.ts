import { Body, Controller,  Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatUser.dto';

@Controller('user')
export class UserController {

    @Post()
    async creatUser(
        @Body() creatUser: CreateUserDto
    ){
       return {
        ...creatUser,
        passwd: undefined,
       }
    }
}
