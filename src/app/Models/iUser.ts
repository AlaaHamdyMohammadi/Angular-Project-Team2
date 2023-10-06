export interface iUser {
  _id: number;
  username: string;
  email: string;
  photo: string;
  password: string;
  passwordConfirm: string;
  role: UserRole;
}

export enum UserRole {
  User = 'user',
  Instructor = 'instructor',
  Admin = 'admin',
}
