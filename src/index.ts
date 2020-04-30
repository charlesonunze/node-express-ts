import express, { application, Request, Response, NextFunction } from 'express';
import todosRoute from './routes/todos';

const app = express();

app.use('/todos', todosRoute);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: error.message });
});

app.listen(3000, (error, _) => {
	if (error) throw new Error(error);
	console.log('server running on port:3000');
});
