import { Date, Schema, model } from 'mongoose';

export interface Game {
  address: string;
  numberOfPeople: number;
  date: Date;
  time: string;
  fieldNumber: number;
}
const GameSchema = new Schema<Game>({
  address: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  fieldNumber: { type: Number, required: true },
});

export default model<Game>('Game', GameSchema);
