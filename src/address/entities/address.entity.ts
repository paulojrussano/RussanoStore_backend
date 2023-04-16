import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'address'})
export class AddressEntity{
    @PrimaryGeneratedColumn('rowid')
    id:number;

    @Column({name:'user_id',nullable: false})
    user_id: number

    @Column({name:'complement',nullable: true})
    complement:String

    @Column({name:'number',nullable: false})
    numberaddress:number

    @Column({name:'cep',nullable: false})
    cep:String

    @Column({name:'city_id',nullable: false})
    city_id:number

    @CreateDateColumn({name:'created_at'})
    createdAt:Date

    @CreateDateColumn({name:'updated_at'})
    updatedAt:Date
} 
