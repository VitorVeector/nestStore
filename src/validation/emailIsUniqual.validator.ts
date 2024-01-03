import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "src/repositories/user.repositories";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqualValidator implements ValidatorConstraintInterface { 
    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userExists = await this.userRepository.findByEmail(value)
        return !userExists
    }
}

export const EmailIsUniqual = (optionValidation: ValidationOptions) => {
    return (obj: Object, property: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: property,
            options: optionValidation,
            constraints: [],
            validator: EmailIsUniqualValidator
        })
    }
}