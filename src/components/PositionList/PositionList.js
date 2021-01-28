import React from 'react';
import classes from './PositionList.module.css';

const PositionList = (props) => {
  function filter() {
    const form = document.getElementById('filter-form');
    const inputs = form.getElementsByTagName('input');
    let uniquePositions = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        uniquePositions.push(inputs[i].id);
      }
    }
    return uniquePositions;
  }

  return (
    <form id='filter-form' className={classes.PositionList}>
      {props.positions.map((position) => {
        return (
          <label key={position}>
            <input type='checkbox' id={position}/>
            {position}
          </label>
        );
      })}
      <button type="button"
        onClick={() => {
          props.onFilter(filter());
        }}
      >
        Применить
      </button>
    </form>
  );
};
export default PositionList;
