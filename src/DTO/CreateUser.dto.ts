import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class createUserDTO {
    @IsNotEmpty({message: 'O campo Nome não pode ser vazio'})
    @IsString({message: 'O campo informado deve ser uma String'})
    name: string;
  
    @IsEmail()
    email: string;
  
    @MinLength(6)
    password: string;
  }