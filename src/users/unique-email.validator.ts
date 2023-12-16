import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    registerDecorator,
    ValidationOptions,
  } from 'class-validator';
  import { Injectable } from '@nestjs/common';
  import { UsersService } from './users.service';
  
  @ValidatorConstraint({ name: 'uniqueEmail', async: true })
  @Injectable()
  export class UniqueEmailValidator implements ValidatorConstraintInterface {
    constructor(private readonly usersService: UsersService) {}
  
    async validate(email: string, args: ValidationArguments) {
      const users = await this.usersService.findByEmail(email);
      return users.length === 0;
    }
  
    defaultMessage(args: ValidationArguments) {
      return 'The email is already in use.';
    }
  }
  
  export function IsUniqueEmail(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: UniqueEmailValidator,
      });
    };
  }