import React from 'react';
import classes from './UserLine.module.css';
const UserLine = (props) => {
  return (
    <div className={classes.UserLine} data-id="userline">
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
          data-id="edit-icon"
        />
        <i
          className={`fa fa-trash ${classes.delete}`}
          onClick={props.onDelete}
          data-id="delete"
        />
      </div>
    </div>
  );
};
export default UserLine;
