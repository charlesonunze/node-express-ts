import { Router } from 'express';
import { sayHello } from '../controllers/todos';

const todos = Router();

todos.get('/hello', sayHello);

export default todos;
