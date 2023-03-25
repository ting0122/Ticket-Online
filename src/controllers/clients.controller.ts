import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators';
import { ClientsService } from 'src/services/clients.service';

@Controller('client')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService){}

    //個人頁面 Personal_info
    @Get()
    getPersonal_info(){
        return this.clientsService.getPersonal_info();
    }

    //訂票 Buy_info
    @Post()
    postBuy_info(){
        return this.clientsService.postBuy_info();
    }

    //取消 Cancel_info
    @Post()
    postCancel_info(){
        return this.clientsService.postCancel_info();
    }

    //編輯 Edit_info
    @Post()
    postEdit_info(){
        return this.clientsService.postEdit_info();
    }

    //付款 Pay_info
    @Post()
    postPay_info(){
        return this.clientsService.postPay_info();
    }
    
}
