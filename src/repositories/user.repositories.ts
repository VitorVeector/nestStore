import { Body, Injectable } from "@nestjs/common"
import { updateUserDTO } from "src/DTO/UpdateUser.dto"
import { TypeUserRepository } from "src/types/UserRepository"

@Injectable()
export class UserRepository{
    private users: TypeUserRepository[] = []

    async save(user: TypeUserRepository){
        this.users.push(user)
    }

    async listUsers(){
        return this.users
    }

    async findByEmail(email: string){
        const userExists = this.users.find(user => user.email === email)
        return userExists !== undefined
    }

    async updateUser(id: string, @Body() newData: Partial<TypeUserRepository> ){
        const userExists = this.users.find(user => user.id === id)
        if(userExists){
            throw new Error('Usuário inexistente!')
        }

        Object.entries(newData).forEach(([key, value]) => {
            if(key === 'id'){
                return
            }
            userExists[key] = value;
        })

        return userExists
    }
}