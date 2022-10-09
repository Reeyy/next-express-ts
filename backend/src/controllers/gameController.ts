import { Request, Response } from 'express';
import Game from '../models/Game';

export const GetAllGames = async (req: Request, res: Response) => {
  const games = await Game.find();
  try {
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createGames = async (req: Request, res: Response) => {
  const crateGame = await Game.create(req.body);
  try {
    return res.status(201).json(crateGame);
  } catch (error) {
    return res.status(500).json({ msg: 'create gane error', error });
  }
};
