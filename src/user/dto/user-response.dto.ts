// src/user/dto/user-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    description: 'O ID único do usuário (MongoDB ObjectId)',
    example: '6a8d7f9b3c2e1b4f0a9e8d7c',
  })
  id: string;

  @ApiProperty({
    description: 'O nome do usuário',
    example: 'Renan Andrade',
  })
  name: string;

  @ApiProperty({
    description: 'O e-mail do usuário',
    example: 'renan@exemplo.com',
  })
  email: string;
}