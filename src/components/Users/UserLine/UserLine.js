import React from 'react';
import classes from './UserLine.module.css';
const UserLine = (props) => {
  return (
    <div className={classes.UserLine}>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
      <div>{props.user.gender}</div>
      <div>{props.user.position}</div>
      <div>
        <i
          className={`fa fa-user-edit ${classes.edit}`}
          onClick={() => {
            props.onEdit();
          }}
          id={props.user.id}
        />
        <i
          className={`fa fa-trash ${classes.delete}`}
          onClick={props.onDelete}
        />
      </div>
    </div>
  );
};
export default UserLine;
