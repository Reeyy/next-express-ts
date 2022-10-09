import { Router } from 'express';
import { createGames, GetAllGames } from '../controllers/gameController';

const router: Router = Router();
router.get('/api/games', GetAllGames);
router.post('/api/games/game', createGames);

export default router;
