import { Body, Controller, Post, Get, Patch, Put, Param, Delete } from "@nestjs/common";
import { createUserDTO } from "src/DTO/CreateUser.dto";
import { ListUserDTO } from "src/DTO/ListUser.dto";
import { updateUserDTO } from "src/DTO/UpdateUser.dto";
import { UserEntity } from "src/interface/user.entity";
import { UserRepository } from "src/repositories/user.repositories";
import { v4 as uuid } from "uuid";

@Controller('/users')
export class UserController {
    constructor(private userRepository: UserRepository) { }

    @Post()
    async createUser(@Body() reqData: createUserDTO) { // Decorator é o nome dado ao método passado por parâmetro, ex: @Body
        const userEntity = new UserEntity()
        userEntity.id = uuid()
        userEntity.name = reqData.name
        userEntity.email = reqData.email
        userEntity.password = reqData.password
        
        this.userRepository.save(userEntity)
        let firstName = userEntity.name.split(' ')
        return { message: `O usuário ${firstName[0]} foi criado com sucesso!` }
        
    }

    @Get()
    async getUsers() {
        const users = await this.userRepository.listUsers()
        const setUsers = users.map(user => new ListUserDTO(
            user.id,
            user.name
        ))

        return setUsers
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() reqData: updateUserDTO){
        const updatedUser = await this.userRepository.updateUser(id, reqData)

        let firstName = updatedUser.name.split(' ')
        return {updatedUser, message: `Usuário ${firstName[0]} atualizado`}
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string){
        await this.userRepository.deleteUser(id)

        return { message: `Usuário foi deletado`}
    }
}