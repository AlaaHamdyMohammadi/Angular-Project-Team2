export interface iInstructor {
  _id: number;
  username: string;
  email: string;
  photo: string;
  password: string;
  passwordConfirm: string;
  lastCourse?: string;
  instructorRating?: number;
  instructorStudents?: number;
  numberOfCourses?: number;
  role: InstructorRole;
}

export enum InstructorRole {
  User = 'user',
  Instructor = 'instructor',
  Admin = 'admin',
}
