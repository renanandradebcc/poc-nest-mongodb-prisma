import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

@Post()
@ApiOperation({
    summary: 'Criar um novo usuário',
    description: 'Este endpoint cria um novo usuário no banco de dados.',
  })
  // 4. Documenta o EXEMPLO DE OBJETO QUE RECEBE (Request Body)
  @ApiBody({
    type: CreateUserDto,
    description: 'Dados necessários para criar um usuário',
  })
  @ApiResponse({
    status: 201,
    description: 'O usuário foi criado com sucesso.',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de validação (ex: e-mail inválido, senha curta).',
  })
  @ApiResponse({
    status: 409,
    description: 'O e-mail fornecido já está em uso.',
  })
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}
