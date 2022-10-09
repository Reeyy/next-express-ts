import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app: Application = express();
//midleware
app.use(express.json());
app.use(cors());

// import routes;
import gameRoutes from './routes/gameRoutes';

// declaare routes;
app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'test' });
});
app.use('/api/games', gameRoutes);
export { app };
