import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { ProdDto } from 'src/dtos/prod.dto';
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
    postBuy_info(@Body() dto: ProdDto){
        return this.ticketsService.postBuy_info(dto.id, dto.amount);
    }

    //取消 Cancel_info
    @Post()
    postCancel_info(@Body() ProdId: number){
        return this.ticketsService.postCancel_info(ProdId);
    }

    //編輯 Edit_info
    @Post()
    postEdit_info(@Body() ProdId: number,I: number, D: number){
        return this.ticketsService.postEdit_info(ProdId,I,D);
    }

    //付款 Pay_info
    @Post()
    postPay_info(){
        return this.ticketsService.postPay_info();
    }
    
}
