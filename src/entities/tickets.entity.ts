import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    production: string;

    @Column()
    amount: number;

    @Column()
    pay_status: boolean;

}