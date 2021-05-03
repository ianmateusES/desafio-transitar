import { Router } from 'express';
import AlunosController from '@controllers/AlunosController';

// http://localhost:3333/alunos
const alunosRouter = Router();
const alunosController = new AlunosController();

alunosRouter.post('/', alunosController.create);
// alunosRouter.put('/:id', alunosController.update);
// alunosRouter.delete('/:id', alunosController.delete);
alunosRouter.get('/', alunosController.index);

export default alunosRouter;
