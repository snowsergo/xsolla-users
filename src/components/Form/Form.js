import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.css';

function Form(props) {
  const [nameIsValid, setValidName] = useState(true);
  const [ageIsValid, setValidAge] = useState(true);
  const [positionIsValid, setValidPosition] = useState(true);
  const [formIsValid, setValidForm] = useState(false);

  const formControls = [
    {
      id: 'name',
      label: 'Имя',
      isValid: nameIsValid,
    },
    {
      id: 'age',
      label: 'Возраст',
      isValid: ageIsValid,
    },
    {
      id: 'position',
      label: 'Должность',
      isValid: positionIsValid,
    },
  ];

  const defaultUser = {
    name: props.editUser ? props.editUser.name : '',
    age: props.editUser ? props.editUser.age : '',
    gender: props.editUser ? props.editUser.gender : 'муж',
    secondGender: props.editUser
      ? props.editUser.gender === 'муж'
        ? 'жен'
        : 'муж'
      : 'жен',
    position: props.editUser ? props.editUser.position : '',
  };

  function checkForm() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const positionInput = document.getElementById('position');
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
      case 'name':
        if (checkName(event.target.value)) {
          setValidName(true);
        } else setValidName(false);
        break;
      case 'age':
        if (checkAge(event.target.value)) {
          setValidAge(true);
        } else setValidAge(false);
        break;
      case 'position':
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
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    const positionInput = document.getElementById('position');

    const user = {
      name: nameInput.value,
      age: ageInput.value,
      gender: genderInput.value,
      position: positionInput.value,
      id: props.editUser ? props.editUser.id : '',
    };

    return user;
  }

  return (
    <div className={classes.Form}>
      <form id='form'>
        <h1>{props.title}</h1>
        {formControls.map((control, index) => {
          return (
            <div key={index}>
              <Input
                label={control.label}
                id={control.id}
                validation={validation}
                isValid={control.isValid}
                defaultValue={defaultUser[control.id]}
              />
              {index === 1 ? (
                <div key='select' className={classes.section}>
                  <p>Пол</p>
                  <select id='gender'>
                    <option>{defaultUser.gender}</option>
                    <option>{defaultUser.secondGender}</option>
                  </select>
                </div>
              ) : null}
            </div>
          );
        })}

        <Button
          type='success'
          disabled={!formIsValid}
          onClick={() => {
            props.onClick(getUser());
            props.onClose();
          }}
        >
          Сохранить
        </Button>
        <Button type='cancel' onClick={() => props.onClose()}>
          Отмена
        </Button>
      </form>
    </div>
  );
}

export default Form;
