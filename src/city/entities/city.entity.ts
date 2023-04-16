import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'city'})
export class CityEntity{
    @PrimaryGeneratedColumn('rowid')
    id:number;

    @Column({name:'state_id',nullable: false})
    state_id: number

    @Column({name:'name',nullable: true})
    name:String

    @CreateDateColumn({name:'created_at'})
    createdAt:Date

    @CreateDateColumn({name:'updated_at'})
    updatedAt:Date
} 