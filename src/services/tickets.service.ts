import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from 'src/entities/users.entity';


@Injectable()
export class ticketsService {
    constructor(
        @InjectRepository(User)
        private clientsRepository:Repository<User>,
    ){}

    //個人頁面 Personal_info
    getPersonal_info(): string {
        return 'Personal_info';
    }

    //訂票 Buy_info
    postBuy_info(): string {
        return 'Buy_info';
    }

    //取消 Cancel_info
    postCancel_info(): string {
        return 'Cancel_info';
    }

    //編輯 Edit_info
    postEdit_info(): string {
        return 'Edit_info';
    }

    //付款 Pay_info
    postPay_info(): string {
        return 'Pay_info';
    }

}
