import { Body, Controller, Post, Req, Get } from "@nestjs/common";
import { UserRepository } from "src/repositories/user.repositories";

@Controller('/users')
export class UserController{
  constructor(private userRepository: UserRepository) {}
  // private userRepository = new UserRepository

  @Post()
  async createUser(@Body() reqData){ // Decorator é o nome dado ao método passado por parâmetro, ex: @Body
    this.userRepository.save(reqData)
  }

  @Get()
  async getUsers(){
    return this.userRepository.listUsers()
  }
}