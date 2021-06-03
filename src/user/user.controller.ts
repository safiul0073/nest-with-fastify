import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service"
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
       const result = await  this.userService.insertUser(name,email, password);
       return result;
    }

    @Get()
    async getUser() {
        const users = this.userService.getData();
        return users;
    }

    @Get(":id")
    async singleUser(@Param("id") id: string) {
        const user = this.userService.getOneUser(id);
        return user;
    }

    @Put(":id")
    async updateData(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        ) {

        const user = await this.userService.updateUser(id, name,email,password);
        return user;
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string) {
        const d = await this.userService.deleteUser(id);
        return d;
    }
}