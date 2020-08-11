import React from 'react';
import { Todo } from '@fullstack-todo/data';

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li className={'todo'}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
