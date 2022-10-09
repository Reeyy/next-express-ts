export interface Game {
  _id?: null | undefined | number;
  name: string | undefined;
  address: string;
  numberOfPeople: number;
  date: Date;
  time: string;
  fieldNumber: number;
}
