import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { IsUniqueEmail } from "./unique-email.validator";

export class CreateUserDto {
    @IsNotEmpty({message: "personalized message"})
    name: string;
    
    @IsEmail()
    @IsUniqueEmail({ message: 'This email is already in use.' })
    email: string;

    @IsNotEmpty()
    password: string;
}
  
export class UpdateUserDto {
    @IsOptional()
    @IsNotEmpty()
    name?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsNotEmpty()
    password?: string;
}
  