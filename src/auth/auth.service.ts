import {
    ForbiddenException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from './entities/user.entity';
import { LoginUserDto, CreateUserDto, UpdateUserDto } from './dto/';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { handleDBErrors } from '@/common/helpers/handle-db-errors.helper';
import { PaginationDto } from '@/common/dto/pagination.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) {
    }

    async create(createUserDto: CreateUserDto) {
        try {
            const { password, ...userData } = createUserDto;
            const user = this.userRepository.create({
                ...userData,
                password: bcrypt.hashSync(password, 10),
            });
            await this.userRepository.save(user);
            delete user.password;
            return {
                ...user,
                token: this.getJwtToken({ id: user.id }),
            };
        } catch (error) {
            handleDBErrors(error, 'AuthModule');
        }
    }

    async findById(id: string): Promise<User> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new NotFoundException('User not found');
        return user;
    }

    async findAll(paginationDto: PaginationDto): Promise<User[]> {
        const { limit = 10, offset = 0 } = paginationDto;
        return await this.userRepository.find({
            take: limit,
            skip: offset,
        });
    }

    async update(id: string, user: User, updateUserDto: UpdateUserDto): Promise<Object> {

        if (user.id !== id)
            throw new ForbiddenException();

        try {
            const { password, ...userData } = updateUserDto;
            const user = await this.userRepository.preload({
                id,
                ...userData,
                password: bcrypt.hashSync(password, 10),
            });

            if (!user)
                throw new NotFoundException('User not found');

            await this.userRepository.save(user);
            delete user.password;

            return {
                ...user,
                token: this.getJwtToken({ id: user.id }),
            };

        } catch (error) {
            handleDBErrors(error, 'AuthModule');
        }
    }

    async login(loginUserDto: LoginUserDto) {
        const { password, email } = loginUserDto;
        const user = await this.userRepository.findOne({
            where: { email: email.toLowerCase().trim() },
            select: { id: true, email: true, password: true },
        });
        if (!user) {
            throw new UnauthorizedException('Credentials are not valid (email)');
        }
        if (!bcrypt.compareSync(password, user.password))
            throw new UnauthorizedException('Credentials are not valid (password)');

        delete user.password;
        return {
            ...user,
            token: this.getJwtToken({ id: user.id }),
        };
    }

    async checkAuthStatus(user: User) {
        return {
            ...user,
            token: this.getJwtToken({ id: user.id }),
        };
    }

    private getJwtToken(payload: JwtPayload) {
        return this.jwtService.sign(payload);
    }

}
