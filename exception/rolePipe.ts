import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateRolePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }
    value = value.toUpperCase();
    if (value && !['ADMIN', 'ENGINEER', 'INTERN'].includes(value)) {
      throw new BadRequestException('Invalid role');
    }
    return value;
  }
}
