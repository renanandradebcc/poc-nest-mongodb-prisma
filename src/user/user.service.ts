import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findById(id: number): Promise<User | null> {
        return await this.prisma.user.findMany();
    };

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data,
        });
    }

    async updateUser(data: Prisma.UserUpdateInput, where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.update({
            data,
            where,
        });
    }
    
    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void> {
        return this.prisma.user.delete({
            where,
        });
    }
}
