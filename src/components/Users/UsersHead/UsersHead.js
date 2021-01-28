import React from 'react';

const UsersHead = (props) => {
 
  return (
    <tr>
      <th>
        Имя <button onClick={()=>props.onSort('name','up')}>1</button>
        <button onClick={()=>props.onSort('name','down')}>2</button>
      </th>
      <th>
        Возраст <button onClick={()=>props.onSort('age','up')}>1</button>
        <button onClick={()=>props.onSort('age','down')}>2</button>
      </th>
      <th>
       
         Пол <button onClick={()=>props.onSort('gender','up')}>1</button>
        <button onClick={()=>props.onSort('gender','down')}>2</button>
      </th>
      <th>
        Должность 
        <button onClick={()=>props.onSort('position','up')}>1</button>
        <button onClick={()=>props.onSort('position','down')}>2</button>
        <button onClick={props.onFilter}>фильтр</button>
      </th>
      </tr>
  );
};
export default UsersHead;
