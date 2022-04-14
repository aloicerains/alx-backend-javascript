export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  [key: string]: any;
  yearsOfExperience?: number;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  firstName: string;
  lastName: string;
}
export function printTeacher(arg: printTeacherFunction) {
  return `${arg.firstName.charAt(0)}.${arg.lastName}`
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
