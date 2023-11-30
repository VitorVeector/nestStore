import { Injectable } from "@nestjs/common"
import { createUserDTO } from "src/DTO/CreateUser.dto"

@Injectable()
export class UserRepository{
    private users = []

    async save(user){
        this.users.push(user)
    }

    async listUsers(){
        return this.users
    }
}