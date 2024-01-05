export class CreateUserDto {
    id:string;
  readonly name: string;
  
  readonly email: string;
  
 password: string;
  
  readonly mobile_number: string;
  
  readonly role: string;
  
  readonly active: boolean;
}
