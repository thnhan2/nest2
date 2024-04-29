import { Prisma } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class EmployeeCreateDto implements Prisma.EmployeeCreateInput {
  name: string;
  email: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'valid role required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
