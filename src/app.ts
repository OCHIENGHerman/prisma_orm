import express, { Request, Response } from 'express';
import chairRoutes from './routes/chairRoutes';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import profileRoutes from './routes/profileRoutes';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});

app.use('/chairs', chairRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/profile', profileRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}🚀`);
});
