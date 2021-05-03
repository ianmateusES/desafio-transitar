import { getMongoRepository, MongoRepository } from 'typeorm';

import Aluno, { StatusRoleType } from '@entities/Alunos';
import ICreateAlunoDTO from '@dtos/ICreateAlunoDTO';
import IQueryGradeRangeDTO from '@dtos/IQueryGradeRangeDTO';
import IAlunosRepository from './IAlunosRepository';

class AlunosRepository implements IAlunosRepository {
  private ormRepository: MongoRepository<Aluno>;

  constructor() {
    this.ormRepository = getMongoRepository(Aluno);
  }

  public async findAll(): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find();

    return alunos;
  }

  public async findByAge(age: number): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find({ where: { age } });

    return alunos;
  }

  public async findByGradeRange({
    noteStart,
    noteEnd,
  }: IQueryGradeRangeDTO): Promise<Aluno[] | undefined> {
    const alunos = await this.ormRepository.find();

    const alunosFilter = alunos.filter(aluno => {
      const { notes } = aluno;
      if (noteStart <= notes[0] && notes[0] <= noteEnd) return true;
      if (noteStart <= notes[1] && notes[1] <= noteEnd) return true;
      if (noteStart <= notes[2] && notes[2] <= noteEnd) return true;

      return false;
    });

    return alunosFilter;
  }

  public async findByStatus(status: string): Promise<Aluno[] | undefined> {
    const statusSearch = status as StatusRoleType;
    const alunos = await this.ormRepository.find({ status: statusSearch });

    return alunos;
  }

  public async findByEmail(email: string): Promise<Aluno | undefined> {
    const aluno = await this.ormRepository.findOne({ email });

    return aluno;
  }

  public async create({
    name,
    email,
    age,
    birthday,
    notes,
    status,
  }: ICreateAlunoDTO): Promise<Aluno> {
    const aluno = this.ormRepository.create({
      name,
      email,
      age,
      birthday,
      notes,
      status,
    });

    await this.ormRepository.save(aluno);

    return aluno;
  }
}

export default AlunosRepository;
