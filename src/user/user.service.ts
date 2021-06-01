import { Injectable, NotFoundException, Put } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

   async insertUser(name: string, email: string, password: string) {

        const newUser = new this.userModel({
            name, email, password
        });
      const result = await newUser.save()
      return result;
    }

    async getData() {
        const dbUser = this.userModel.find();
        return dbUser;
    }

    async getOneUser(id: string) {
        let dbOneUser = null;
        try {
             dbOneUser = this.userModel.findById(id);
        } catch (error) {
            throw new NotFoundException("somthing missing!")
        }

        if(!dbOneUser) {
            throw new NotFoundException("Not find")
            
        }

        return dbOneUser;
    }

   
    async updateUser(id: string, name: string, email: string, password: string) {
        
        let user = await this.findSingleUser(id);
        if(name) {
            user.name = name;
        }
        if(email) {
            user.email = email;
        }
        if(password) {
            user.password = password;
        }

         user.save();
        return "Success";
       
    }

    async deleteUser(id: string) {
       let done
       try {
           done = await this.userModel.findByIdAndDelete(id);
       } catch (error) {
           throw new NotFoundException;
       }
       if(done){
           return "successfully Deleted!";
       }else{
           return "Somthing missing!";
       }
    }


    private findSingleUser(id: string) : Promise<User>{
        let user;
        try {
            user = this.userModel.findById(id)
       } catch (error) {
           throw new NotFoundException;
       }

       if(!user) {
           throw new NotFoundException("Not found any user!");      
       }

       return user;
    }
}