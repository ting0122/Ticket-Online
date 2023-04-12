import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Ticket } from 'src/entities/tickets.entity';
import { ProdDto } from 'src/dtos/prod.dto';

@Injectable()
export class ticketsService {
    constructor(
        @InjectRepository(Ticket)
        private ticketsRepository:Repository<Ticket>,
    ){}

    //個人頁面 Personal_info
    getPersonal_info(): Promise<Ticket[]> {
        return this.ticketsRepository.find();
    }

    //訂票 Buy_info
     async postBuy_info(prodId:number, Q:number){
         await this.ticketsRepository.update(prodId,{amount: Q});
    }

    //取消 Cancel_info
    async postCancel_info(id:number){
        await this.ticketsRepository.delete(id);
    }

    //編輯 Edit_info
    async postEdit_info(id:number,I:number,D:number){
        await this.ticketsRepository.update(id,{amount:+I-D});
    }

    //付款 Pay_info
    postPay_info(): string {
        return 'Pay_info';
    }

}
