import { Router } from 'express';
import {
	createTodo,
	editTodo,
	deleteTodo,
	getAllTodos,
} from '../controllers/todos';

const todos = Router();

todos.get('/', getAllTodos);
todos.post('/', createTodo);
todos.patch('/:id', editTodo);
todos.delete('/:id', deleteTodo);

export default todos;
