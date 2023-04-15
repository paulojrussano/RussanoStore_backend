import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatUser.dto';
import { User } from './Interfaces/interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private user: User[] = []

    async creatUser(CreateUserDto: CreateUserDto): Promise<User>{
        
        const saltOrRounds = 10;
        const passwdhash = await hash(CreateUserDto.password,saltOrRounds);

        const user = {
            ...CreateUserDto,
            id: this.user.length + 1,
            password: passwdhash
        }

        this.user.push(user)

        console.log("passwordHASH",passwdhash);

        return(user)

    }

    async getAllUser(): Promise<User[]> {
        return this.user
    }


}
