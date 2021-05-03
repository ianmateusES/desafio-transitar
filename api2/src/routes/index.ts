import { Router } from 'express';
import alunosRouter from './alunos.routes';
import searchsRouter from './searchs.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ mensage: 'Air application' });
});

routes.use('/alunos', alunosRouter);
routes.use('/searchs', searchsRouter);

export default routes;
