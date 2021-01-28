import React, { useState } from 'react';
import classes from './EditForm.module.css';

function EditForm(props) {
  const [nameIsValid, setValidName] = useState(true);
  const [ageIsValid, setValidAge] = useState(true);
  const [positionIsValid, setValidPosition] = useState(true);
  const [formIsValid, setValidForm] = useState(false);

  function checkForm() {
    const nameInput = document.getElementById('edit-name');
    const ageInput = document.getElementById('edit-age');
    const positionInput = document.getElementById('edit-position');
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
      case 'edit-name':
        if (checkName(event.target.value)) {
          setValidName(true);
        } else setValidName(false);
        break;
      case 'edit-age':
        if (checkAge(event.target.value)) {
          setValidAge(true);
        } else setValidAge(false);
        break;
      case 'edit-position':
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
    const nameInput = document.getElementById('edit-name');
    const ageInput = document.getElementById('edit-age');
    const genderInput = document.getElementById('edit-gender');
    const positionInput = document.getElementById('edit-position');

    const user = {
      name: nameInput.value,
      age: ageInput.value,
      gender: genderInput.value,
      position: positionInput.value,
      id: props.editUser.id,
    };

    return user;
  }

  return (
    <div className={classes.EditForm}>
      <form id='edit-form'>
        <h1>Редактирование пользователя</h1>
        <div className={classes.section}>
          Имя
          <input
            id='edit-name'
            defaultValue={props.editUser.name}
            onChange={validation}
          />
          {nameIsValid ? '' : <span>Введите корректное значение</span>}
        </div>
        <div className={classes.section}>
          Возраст
          <input
            id='edit-age'
            defaultValue={props.editUser.age}
            onChange={validation}
          />
          {ageIsValid ? '' : <span>Введите корректное значение</span>}
        </div>
        <div className={classes.section}>
          Пол
          <select id='edit-gender'>
            <option>{props.editUser.gender}</option>
            <option>{props.editUser.gender === 'муж' ? 'жен' : 'муж'}</option>
          </select>
        </div>

        <div className={classes.section}>
          Должность
          <input
            id='edit-position'
            defaultValue={props.editUser.position}
            onChange={validation}
          />
          {positionIsValid ? '' : <span>Введите корректное значение</span>}
        </div>

        <button
          type='button'
          disabled={!formIsValid}
          onClick={() => {
            props.onSave(getUser());
            props.onClose();
          }}
        >
          Сохранить
        </button>
        <button type='button' onClick={() => props.onClose()}>
          Отменить
        </button>
      </form>
    </div>
  );
}

export default EditForm;
