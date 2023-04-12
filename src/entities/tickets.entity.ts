import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    production_ID: number;

    @Column()
    amount: number;

    @Column()
    pay_status: boolean;

}