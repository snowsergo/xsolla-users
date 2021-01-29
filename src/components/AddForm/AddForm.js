import React, { useState } from 'react';
import classes from './AddForm.module.css';

function AddForm(props) {
  const [nameIsValid, setValidName] = useState(true);
  const [ageIsValid, setValidAge] = useState(true);
  const [positionIsValid, setValidPosition] = useState(true);
  const [formIsValid, setValidForm] = useState(false);

  function checkForm() {
    const nameInput = document.getElementById('add-name');
    const ageInput = document.getElementById('add-age');
    const positionInput = document.getElementById('add-position');
    if (
      checkName(nameInput.value) &&
      checkAge(ageInput.value) &&
      checkPosition(positionInput.value)
    ) {
      setValidForm(true);
    } else setValidForm(false);
  }

  function checkName(str) {
    const Reg = /^[А-Я][а-я]+$/;
    return Reg.test(str);
  }

  function checkAge(str) {
    const Reg = /^[1-9][0-9]?$/;
    return Reg.test(str);
  }

  function checkPosition(str) {
    const Reg = /^[А-Я][а-я]+(((\s\d+)?(\s[а-я]+)?)?)+$/;
    return Reg.test(str);
  }

  function validation(event) {
    switch (event.target.id) {
      case 'add-name':
        if (checkName(event.target.value)) {
          setValidName(true);
        } else setValidName(false);
        break;
      case 'add-age':
        if (checkAge(event.target.value)) {
          setValidAge(true);
        } else setValidAge(false);
        break;
      case 'add-position':
        if (checkPosition(event.target.value)) {
          setValidPosition(true);
        } else setValidPosition(false);
        break;
      default:
        break;
    }
    checkForm();
  }

  function getUser() {
    const nameInput = document.getElementById('add-name');
    const ageInput = document.getElementById('add-age');
    const genderInput = document.getElementById('add-gender');
    const positionInput = document.getElementById('add-position');
    const user = {
      name: nameInput.value,
      age: ageInput.value,
      gender: genderInput.value,
      position: positionInput.value,
    };

    return user;
  }

  return (
    <div className={classes.AddForm}>
      <form id='add-form'>
        <h1>Создание нового пользователя</h1>
        <div className={classes.section}>
          <p>Имя</p>
          <input id='add-name' onChange={validation} />
          {nameIsValid ? '' : <span>Введите корректное значение</span>}
        </div>
        <div className={classes.section}>
          <p>Возраст</p>
          <input id='add-age' onChange={validation} />
          {ageIsValid ? '' : <span>Введите корректное значение</span>}
        </div>
        <div className={classes.section}>
          <p>Пол</p>
          <select id='add-gender'>
            <option>муж</option>
            <option>жен</option>
          </select>
        </div>
        <div className={classes.section}>
          <p>Должность</p>
          <input id='add-position' onChange={validation} />
          {positionIsValid ? '' : <span>Введите корректное значение</span>}
        </div>

        <button
          className={classes.createButton}
          type='button'
          disabled={!formIsValid}
          onClick={() => {
            props.onClick(getUser());
            props.onClose();
          }}
        >
          Создать
        </button>
        <button
          className={classes.cancelButton}
          type='button'
          onClick={() => props.onClose()}
        >
          Отменить
        </button>
      </form>
    </div>
  );
}

export default AddForm;
