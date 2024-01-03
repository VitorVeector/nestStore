import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailIsUniqual } from 'src/validation/emailIsUniqual.validator';

export class createUserDTO {
	@MinLength(3, { message: 'O campo nome precisar ter mais de 3 caractéres.' })
	@IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
	@IsString({ message: 'O campo informado deve ser uma String.' })
	name: string;

	@IsNotEmpty({ message: 'O campo e-mail não pode ser vazio.' })
	@IsEmail(undefined, { message: 'Informe um email válido.' })
	@EmailIsUniqual({message: "Usuário existente."})
	email: string;

	@MinLength(6)
	password: string;
}