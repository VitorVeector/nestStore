import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class updateUserDTO {
    @IsOptional()
    @MinLength(3, { message: 'O campo nome precisar ter mais de 3 caractéres.' })
    @IsString({ message: 'O campo informado deve ser uma String.' })
    name: string;

    @IsOptional()
    @IsEmail(undefined, { message: 'Informe um email válido.' })
    email: string;

    @IsOptional()
    @MinLength(6)
    password: string;
}