import React from 'react';
import classes from './UserLine.module.css';
const UserLine = (props) => {
  return (
    // <tr>
    //   <td>{props.user.name}</td>
    //   <td>{props.user.age}</td>
    //   <td>{props.user.gender}</td>
    //   <td>{props.user.position}</td>
    //   <button onClick={props.onEdit} id={props.user.id}>редактировать</button>
    //   <button onClick={props.onDelete}>удалить</button>
    //   </tr>
    
      <div className={classes.UserLine}>
        <div>{props.user.name}</div>
        <div>{props.user.age}</div>
        <div>{props.user.gender}</div>
        <div>{props.user.position}</div>
        <div>
        <i className={`fa fa-user-edit ${classes.edit}`} onClick={props.onEdit} id={props.user.id} />
        {/* <button onClick={props.onEdit} id={props.user.id}> */}
        <i className={`fa fa-trash ${classes.delete}`} onClick={props.onDelete}/>
        {/* <button onClick={props.onDelete}>удалить</button> */}
      </div>
    
    
    </div>
  );
};
export default UserLine;
