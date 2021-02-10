import React from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';

export const TodoList = (props) => (
  <ul>
    {props.todos.map((todo, index) => (
      <TodoItem 
        todo={todo} 
        key={todo.id} 
        index={index} 
        onChange={props.onToggle}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
}