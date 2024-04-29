import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Prisma } from '@prisma/client';
import { EmployeeCreateDto } from './dto-valid/EmployeeCreateInputDto';
import { ValidateRolePipe } from 'exception/rolePipe';
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body(ValidationPipe) createEmployeeDto: EmployeeCreateDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  findAll(
    @Query('role', ValidateRolePipe)
    role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
  ) {
    if (role) return this.employeesService.findAll(role);
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput,
  ) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
