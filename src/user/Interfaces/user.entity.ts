import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'user'})
export class UserEntity{
    @PrimaryGeneratedColumn('rowid')
    id:number;

    @Column({name:'name',nullable: false})
    name: String

    @Column({name:'email',nullable: false})
    email:String

    @Column({name:'phone'})
    phone:String

    @Column({name:'cpf',nullable: false})
    cpf:String

    @Column({name:'password',nullable: false})
    password:String
} 

