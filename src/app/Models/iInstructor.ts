export interface iInstructor {
  _id: number;
  username: string;
  email: string;
  photo: string;
  password: string;
  passwordConfirm: string;
  role: InstructorRole;
}

export enum InstructorRole {
  User = 'user',
  Instructor = 'instructor',
  Admin = 'admin',
}
