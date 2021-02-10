import React, { useState } from 'react';
import { TodoList } from './Todo/TodoList';

function App() {
  
  const [todos, setTodos] = React.useState(
    [
      {id: 1, completed: false, title: 'lorem ipsum'},
      {id: 2, completed: false, title: 'qweqwe eerthr rem'},
      {id: 3, completed: false, title: 'qwsqwswq sqwsqw sum'},
      {id: 4, completed: false, title: 'lorem dolor ipsum'},
    ]
  );

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  return (
    <div className="wrapper">
      <h1>React practice</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
