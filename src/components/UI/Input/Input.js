import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <p>{props.label}</p>
      <input
        id={props.id}
        onChange={props.validation}
        defaultValue={props.defaultValue}
      />
      {props.isValid ? '' : <span>Введите корректное значение</span>}
    </div>
  );
};

export default Input;
