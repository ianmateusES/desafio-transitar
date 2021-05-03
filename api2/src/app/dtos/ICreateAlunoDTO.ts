import { StatusRoleType } from '@entities/Alunos';

export default interface ICreateAlunoDTO {
  name: string;
  email: string;
  age: number;
  birthday: string;
  notes: number[];
  status: StatusRoleType;
}
