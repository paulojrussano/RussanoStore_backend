import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatUser.dto';
import { UserEntity } from './Interfaces/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//nao esquecer
//git status
//git add .
//git commit -m "feat: texto"
//git push

@Injectable()
export class UserService {
    

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){};

    async creatUser(CreateUserDto: CreateUserDto): Promise<UserEntity>{
        
        const saltOrRounds = 10;
        const passwdhash = await hash(CreateUserDto.password,saltOrRounds);

        return this.userRepository.save({//gravando user 
            ...CreateUserDto,
            type_user: 1,
            password: passwdhash,

        })
 
    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.userRepository.find()//buscando todos 
    }


}

