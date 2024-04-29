import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService, UsersService, EmployeesService],
})
export class AppModule {}
