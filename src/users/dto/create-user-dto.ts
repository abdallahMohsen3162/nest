import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsPositive, Length, ValidateNested } from "class-validator";


export class UserBankAccountDto{
  @Length(5, 5)
  @IsNotEmpty()
  BankNumber: string;
  
  @IsPositive()
  balance: number;
}

export class CreateUserDto{
  @Length(5, 20)
  name: string;
  @IsEmail()
  email: string;
  id?: number;

  @ValidateNested({ each: true }) 
  @Type(() => UserBankAccountDto)
  @IsNotEmpty()
  bankAccount: UserBankAccountDto;
}