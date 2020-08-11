import { Express } from "express";
import { Todo } from "@fullstack-todo/data";

const todos: Todo[] = [{ title: 'Todo 1' },{ title: 'Todo 2' }]

export function addTodoRoutes(app: Express) {
  app.get('/api/todos',(req,res) => res.send(todos));
  app.post('/api/addTodo',(req,res) => {
    const newTodo: Todo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    };
    todos.push(newTodo);
    res.send(newTodo);
  });
}
