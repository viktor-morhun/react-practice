import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

export const TodoItem = ({ todo, index, onChange }) => {
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

        <button className='rm'>&times;</button>
      </li>
    );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}