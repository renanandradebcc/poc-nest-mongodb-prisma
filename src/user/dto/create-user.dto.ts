// 1. Importe o ApiProperty
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  
  @ApiProperty({
    description: 'O e-mail único do usuário.',
    example: 'usuario@exemplo.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'O nome (ou apelido) do usuário.',
    example: 'Renan Andrade',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}