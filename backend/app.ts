import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app: Application = express();

app.use(express.json());

// import routes;

// declaare routes;
app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'test' });
});

export { app };
