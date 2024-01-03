import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/user.controller";
import { UserRepository } from "src/repositories/user.repositories";
import { EmailIsUniqualValidator } from "src/validation/emailIsUniqual.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailIsUniqualValidator]
  })
export class UserModule {}