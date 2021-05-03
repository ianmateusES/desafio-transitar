import axios from 'axios';
import AppError from '@errors/AppError';
import Aluno from '@entities/Alunos';
import IAlunosRepository from '@repositories/IAlunosRepository';

interface IRequest {
  name: string;
  email: string;
  birthday: string;
  n1: number;
  n2: number;
  n3: number;
}

class CreateAlunoService {
  constructor(private alunoRepository: IAlunosRepository) {}

  public async execute({
    name,
    email,
    birthday,
    n1,
    n2,
    n3,
  }: IRequest): Promise<Aluno> {
    const checkAlunoExist = await this.alunoRepository.findByEmail(email);
    if (checkAlunoExist) {
      throw new AppError('Email address already used');
    }

    const dateNow = new Date();

    const age = dateNow.getFullYear() - Number(birthday.split('-')[0]);

    let status;

    try {
      const resp = await axios.get('http://localhost:3333/', {
        params: { n1, n2, n3 },
      });

      status = resp.data;
    } catch (err) {
      throw new AppError('Could not access external api');
    }

    const aluno = await this.alunoRepository.create({
      name,
      email,
      age,
      birthday,
      notes: [n1, n2, n3],
      status,
    });

    return aluno;
  }
}

export default CreateAlunoService;
