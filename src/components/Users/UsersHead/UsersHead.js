import React from 'react';
import classes from './UsersHead.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UsersHead = (props) => {
  return (
    // <tr className={classes.UsersHead}>
    //   <th>
    //     Имя <button onClick={()=>props.onSort('name','up')}>1</button>
    //     <button onClick={()=>props.onSort('name','down')}>2</button>
    //   </th>
    //   <th>
    //     Возраст <button onClick={()=>props.onSort('age','up')}>1</button>
    //     <button onClick={()=>props.onSort('age','down')}>2</button>
    //   </th>
    //   <th>

    //      Пол <button onClick={()=>props.onSort('gender','up')}>1</button>
    //     <button onClick={()=>props.onSort('gender','down')}>2</button>
    //   </th>
    //   <th>
    //     Должность
    //     <button onClick={()=>props.onSort('position','up')}>1</button>
    //     <button onClick={()=>props.onSort('position','down')}>2</button>
    //     <button onClick={props.onFilter}>фильтр</button>
    //   </th>
    //   </tr>

    <div className={classes.UsersHead}>
      <div className={classes.icons}>
        <p>Имя</p>
        <div className={classes.sort}>
          <i
            className={`fa fa-sort-up`}
            onClick={() => props.onSort('name', 'down')}
          />
          <i
            className={`fa fa-sort-down`}
            onClick={() => props.onSort('name', 'up')}
          />
        </div>
      </div>

      <div className={classes.icons}>
        <p>Возраст</p>
        <div className={classes.sort}>
          <i
            className={'fa fa-sort-up'}
            onClick={() => props.onSort('age', 'up')}
          />
          <i
            className={'fa fa-sort-down'}
            onClick={() => props.onSort('age', 'down')}
          />
        </div>
      </div>
      <div className={classes.icons}>
        <p>Пол</p>
        <div className={classes.sort}>
        <i
          className={'fa fa-sort-up'}
          onClick={() => props.onSort('gender', 'up')}
        />
        <i
          className={'fa fa-sort-down'}
          onClick={() => props.onSort('gender', 'down')}
        />

        </div>
        
      </div>
      <div className={classes.icons}>
        <p>Должность</p>
        <div className={classes.sort}>
          <i
            className={'fa fa-sort-up'}
            onClick={() => props.onSort('position', 'up')}
          />
          <i
            className={'fa fa-sort-down'}
            onClick={() => props.onSort('position', 'down')}
          />
        </div>
        {/* <button onClick={()=>props.onSort('position','down')}>2</button> */}
        <div className={classes.sort}>
        <i className={'fa fa-filter'} onClick={props.onFilter} />
        </div>
        
      </div>
    </div>
  );
};
export default UsersHead;
