import { Request, Response } from 'express';

import AlunoRepository from '@repositories/AlunosRepository';
import IAlunosRepository from '@repositories/IAlunosRepository';
import CreateAlunoService from '@services/CreateAlunoService';

export default class AlunosController {
  private alunoRepository: IAlunosRepository;

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, birthday, n1, n2, n3 } = req.body;
    this.alunoRepository = new AlunoRepository();
    const createAlunoService = new CreateAlunoService(this.alunoRepository);

    const aluno = await createAlunoService.execute({
      name,
      email,
      birthday,
      n1,
      n2,
      n3,
    });

    return res.json(aluno);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    this.alunoRepository = new AlunoRepository();

    const aluno = await this.alunoRepository.findAll();

    return res.json(aluno);
  }
}
