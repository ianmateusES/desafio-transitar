import { Request, Response } from 'express';

import AlunoRepository from '@repositories/AlunosRepository';

export default class AlunosController {
  private alunoRepository: AlunoRepository;

  public async findEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.query;
    this.alunoRepository = new AlunoRepository();

    const aluno = await this.alunoRepository.findByEmail(String(email));

    return res.json(aluno);
  }

  public async findAge(req: Request, res: Response): Promise<Response> {
    const { age } = req.query;
    this.alunoRepository = new AlunoRepository();

    const aluno = await this.alunoRepository.findByAge(Number(age));

    return res.json(aluno);
  }

  public async findGradeRange(req: Request, res: Response): Promise<Response> {
    const { noteStart, noteEnd } = req.query;
    this.alunoRepository = new AlunoRepository();

    const aluno = await this.alunoRepository.findByGradeRange({
      noteStart: Number(noteStart),
      noteEnd: Number(noteEnd),
    });

    return res.json(aluno || {});
  }

  public async findStatus(req: Request, res: Response): Promise<Response> {
    const { status } = req.query;
    this.alunoRepository = new AlunoRepository();

    const aluno = await this.alunoRepository.findByStatus(
      String(status).toUpperCase(),
    );

    return res.json(aluno || {});
  }
}
