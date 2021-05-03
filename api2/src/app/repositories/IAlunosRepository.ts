import Aluno from '@entities/Alunos';
import ICreateAlunoDTO from '@dtos/ICreateAlunoDTO';
import IQueryGradeRangeDTO from '@dtos/IQueryGradeRangeDTO';

export default interface IAlunosRepository {
  findAll(): Promise<Aluno[] | undefined>;
  findByAge(age: number): Promise<Aluno[] | undefined>;
  findByGradeRange(data: IQueryGradeRangeDTO): Promise<Aluno[] | undefined>;
  findByStatus(status: string): Promise<Aluno[] | undefined>;
  findByEmail(email: string): Promise<Aluno | undefined>;
  create(data: ICreateAlunoDTO): Promise<Aluno>;
}
