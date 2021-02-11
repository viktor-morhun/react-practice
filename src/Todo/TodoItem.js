import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import Context from '../context';

export const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }
    return (
      <li>
        <span className={classes.join(' ')}>
          <input 
            type="checkbox" 
            onChange={() => onChange(todo.id)} 
            checked={todo.completed}
          />
          <strong>{index + 1 + " "}</strong>
          {todo.title}
        </span>

        <button 
          className='rm' 
          onClick={removeTodo.bind(null, todo.id)}
        >
          &times;
        </button>
      </li>
    );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}