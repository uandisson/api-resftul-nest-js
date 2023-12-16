import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "personalized message"})
    name: string;
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
  }
  