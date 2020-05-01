import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newTodo = new Todo(Math.random().toString(), text);

	TODOS.push(newTodo);
	return res.status(200).send({ message: 'Todo edited', todo: newTodo });
};

export const editTodo: RequestHandler = (req, res, next) => {
	const todoId = req.params.id;
	const text = (req.body as { text: string }).text;

	const todo = TODOS.find((todo) => todo.id === todoId);

	if (!todo) return res.status(404).send({ message: 'todo not found' });

	todo.text = text;
	return res.status(200).send({ message: 'Edited todo', todo: todo });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
	const todoId = req.params.id;

	const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

	if (todoIndex < 0) return res.status(404).send({ message: 'todo not found' });

	TODOS.splice(todoIndex, 1);
	return res.status(200).send({ message: `Todo "${todoIndex}" deleted` });
};

export const getAllTodos: RequestHandler = (req, res, next) => {
	return res.status(200).send({ message: `Todos`, todos: TODOS });
};
