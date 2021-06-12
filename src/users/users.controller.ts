import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersDto } from "./users.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
     async create(@Body() userDto: UsersDto) {
        const user = await this.userService.addUser(userDto);
        return user;
    }

    @Get(':id')
    async singleData(@Param('id') id: string) {
        const user = await this.userService.getOne("example@gmail.com");
        return user;
    }
}