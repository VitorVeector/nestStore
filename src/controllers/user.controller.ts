import { Body, Controller, Post, Req, Get } from "@nestjs/common";
import { createUserDTO } from "src/DTO/CreateUser.dto";
import { UserRepository } from "src/repositories/user.repositories";

@Controller('/users')
export class UserController{
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() reqData: createUserDTO){ // Decorator é o nome dado ao método passado por parâmetro, ex: @Body
    this.userRepository.save(reqData)
    return reqData
  }

  @Get()
  async getUsers(){
    return this.userRepository.listUsers()
  }
}