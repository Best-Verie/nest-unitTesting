import { User } from './user.entity';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(
        private readonly UserService : UserService
    ){}

    @Get()
    async getAll(){
        return await this.UserService.findAll();
    }

    @Post()
    async create(@Body() user:User){
        return await this.UserService.save(user);
    }
}
