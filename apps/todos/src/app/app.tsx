import React, { useState, useEffect } from 'react';

interface Todo {
  title: string;
}

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li className={'todo'}>{todo.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
