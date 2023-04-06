import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators';
import { ticketsService } from 'src/services/tickets.service';

@Controller('ticket')
export class ticketsController {
    constructor(private readonly ticketsService: ticketsService){}

    //個人頁面 Personal_info
    @Get()
    getPersonal_info(){
        return this.ticketsService.getPersonal_info();
    }

    //訂票 Buy_info
    @Post()
    postBuy_info(){
        return this.ticketsService.postBuy_info();
    }

    //取消 Cancel_info
    @Post()
    postCancel_info(){
        return this.ticketsService.postCancel_info();
    }

    //編輯 Edit_info
    @Post()
    postEdit_info(){
        return this.ticketsService.postEdit_info();
    }

    //付款 Pay_info
    @Post()
    postPay_info(){
        return this.ticketsService.postPay_info();
    }
    
}
