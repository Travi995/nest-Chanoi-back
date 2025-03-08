import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text',{nullable:true})
    name:string

    @Column('text',{nullable:true,unique:true})
    nameProfile:string

    @Column('text',{nullable:false,unique:true})
    email:string

    @Column('numeric',{nullable:true})
    phone:number

    @Column('text',{nullable:true})
    password:string 

}
