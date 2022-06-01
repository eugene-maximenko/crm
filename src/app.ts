import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('root page is requested');

  res.send('Hello');
});

app.listen(5000, () => console.log('Server running'));
