import mongoose from 'mongoose';
import { app } from './app';
const port: string | undefined = process.env.PORT;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log('conenct to db');
    app.listen(port, () => console.log('run at', port));
  } catch (error) {
    console.log('failed connect');
    console.log(error);
  }
};

startServer();
