import React from 'react';
import classes from './UsersHead.module.css';

const UsersHead = (props) => {
  return (
  
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
        <div className={classes.sort}>
        <i data-id="filter-icon" className={'fa fa-filter'} onClick={props.onFilter} />
        </div>
        
      </div>
    </div>
  );
};
export default UsersHead;
