import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { EmployeesService } from './employees/employees.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
    private readonly employeeService: EmployeesService,
  ) {}

  // test view
  @Get()
  @Render('index')
  async root() {
    const users = await this.employeeService.findAll();
    return { message: 'hello world', users: users };
  }
}
