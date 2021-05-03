import { Router } from 'express';
import SearchController from '@controllers/SearchController';

// http://localhost:3333/searchs
const searchsRouter = Router();
const searchController = new SearchController();

searchsRouter.get('/email', searchController.findEmail);
searchsRouter.get('/age', searchController.findAge);
searchsRouter.get('/notes', searchController.findGradeRange);
searchsRouter.get('/status', searchController.findStatus);

export default searchsRouter;
