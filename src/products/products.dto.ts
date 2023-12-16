import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    readonly description: string;
    
    @IsNotEmpty()
    readonly price: number;
  }
  
  export class UpdateProductDto {
    @IsNotEmpty()
    readonly name?: string;
    
    @IsNotEmpty()
    readonly description?: string;
    
    @IsNotEmpty()
    readonly price?: number;
  }
  