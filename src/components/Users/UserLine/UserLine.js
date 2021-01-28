import React from 'react';

const UserLine = (props) => {
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.gender}</td>
      <td>{props.user.position}</td>
      <button onClick={props.onEdit} id={props.user.id}>редактировать</button>
      <button onClick={props.onDelete}>удалить</button>
      </tr>
    
      
  );
};
export default UserLine;
