import { Router } from 'express';
import { createGames, GetAllGames } from '../controllers/gameController';

const router: Router = Router();
router.get('/', GetAllGames);
router.post('/game', createGames);

export default router;
