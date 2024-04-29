import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/info-user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'): UserDto[] {
    if (role) {
      return this.users.filter((u) => u.role === role);
    }
    console.log(this.users);
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  create(user: CreateUserDto) {
    let newId = 1;
    if (this.users.length > 0) {
      const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
      newId = usersByHighestId[0].id + 1;
    }

    const newUser = {
      id: newId,
      ...user,
    };
    this.users.push(newUser);
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        const { name, email, role } = updateUserDto;
        if (name !== undefined) {
          user.name = name;
        }
        if (email !== undefined) {
          user.email = email;
        }
        if (role !== undefined) {
          user.role = role;
        }
      }
      return user;
    });
  }
}
