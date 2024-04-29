export class UserDto {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
