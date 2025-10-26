import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findById(id: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    };

    async createUser(dto: CreateUserDto): Promise<User> {
        try {
            const userExists = await this.prisma.user.findUnique({
                where: {
                    email: dto.email,
                },
            });

            if (userExists) {
                throw new ConflictException('Este e-mail já está em uso.');
            }

            const newUser = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    name: dto.name,
                },
            });

            return newUser;
        }
        catch (error) {
            console.log(error)
        }
    }

    async updateUser(data: Prisma.UserUpdateInput, where: Prisma.UserWhereUniqueInput): Promise<User> {
        const findUser = await this.prisma.user.findUnique({
            where,
        });

        if (!findUser) {
            throw new NotFoundException('Usuário não encontrado.');
        }

        return this.prisma.user.update({
            data,
            where,
        });
    }
    
    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void> {
        this.prisma.user.delete({
            where,
        });
    }
}
