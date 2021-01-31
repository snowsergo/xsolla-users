import React, { Component } from 'react';
import UserLine from './UserLine/UserLine';
import UsersHead from './UsersHead/UsersHead';
import PositionList from '../PositionList/PositionList';
import Backdrop from '../UI/Backdrop/Backdrop';
import Button from '../UI/Button/Button';
import classes from './Users.module.css';
import users from '../../constants/defaultUsers';
import Form from '../Form/Form';

export default class Users extends Component {
  state = {
    users: sessionStorage.getItem('users')
      ? JSON.parse(sessionStorage.getItem('users'))
      : users,
    filterArr: [],
    uniquePositions: [],
    isFilterOpen: false,
    addUserisOpen: false,
    editUserisOpen: false,
    editUser: '',
  };

  saveToStorage(arr) {
    sessionStorage.setItem('users', JSON.stringify(arr));
  }

  sort = (key, direction) => {
    const users = this.state.users;
    if (direction === 'up') {
      users.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
      users.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    }
    this.setState({
      users: users,
    });
  };

  deleteUser(id) {
    const users = this.state.users;
    const elem = users.find((item) => item.id === id);
    users.splice(users.indexOf(elem), 1);
    this.setState({
      users: users,
    });
    this.saveToStorage(users);
  }

  filter(item, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (item.position === arr[i]) {
        return true;
      }
    }
    return false;
  }

  getFilterArr = (uniqArr) => {
    this.setState({
      filterArr: uniqArr,
      isFilterOpen: false,
    });
  };

  toggleFilter() {
    const isFilterOpen = this.state.isFilterOpen;
    const uniquePositions = [
      ...new Set(this.state.users.map((item) => item.position)),
    ];
    this.setState({
      isFilterOpen: !isFilterOpen,
      uniquePositions,
    });
  }

  handleAddForm = () => {
    const formState = this.state.addUserisOpen;
    this.setState({
      addUserisOpen: !formState,
    });
  };

  handleEditForm = (id) => {
    const users = this.state.users;
    const elem = users.find((item) => item.id === id);
    const formState = this.state.editUserisOpen;
    this.setState({
      editUserisOpen: !formState,
      editUser: elem,
    });
  };

  createUser = (user) => {
    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    const newUser = {
      name: user.name,
      id: id,
      age: user.age,
      gender: user.gender,
      position: user.position,
    };
    const users = this.state.users;
    users.push(newUser);
    this.setState({
      users: users,
    });
    this.saveToStorage(users);
  };

  editUser = (user) => {
    const newUsers = this.state.users.map((obj) => {
      if (obj.id === user.id) {
        return user;
      }
      return obj;
    });

    this.setState({
      users: newUsers,
    });
    this.saveToStorage(newUsers);
  };

  filterHandler = (arr, filterArr) => {
    let newArr = [];
    if (!filterArr.length) {
      newArr = arr;
    } else {
      newArr = arr.filter((item) => this.filter(item, filterArr));
    }
    return newArr;
  };

  backdropHandler = () => {
    this.setState({
      isFilterOpen: false,
      addUserisOpen: false,
      editUserisOpen: false,
    });
  };

  render() {
    return (
      <div className={classes.Users}>
        {this.state.isFilterOpen ? (
          <PositionList
            positions={this.state.uniquePositions}
            onFilter={this.getFilterArr}
          />
        ) : null}

        {this.state.addUserisOpen ? (
          <Form
            onClick={this.createUser}
            onClose={this.handleAddForm}
            title='Создание пользователя'
          />
        ) : null}

        {this.state.editUserisOpen ? (
          <Form
            onClose={this.handleEditForm}
            editUser={this.state.editUser}
            onClick={this.editUser}
            title='Редактирование пользователя'
          />
        ) : null}

        {this.state.isFilterOpen ||
        this.state.addUserisOpen ||
        this.state.editUserisOpen ? (
          <Backdrop onClick={this.backdropHandler}></Backdrop>
        ) : null}

        <h1 className={classes.title}>Список всех пользователей</h1>

        <Button
          data-id='add-user'
          type='addUser'
          onClick={() => this.handleAddForm()}
        >
          Добавть пользователя
        </Button>

        <UsersHead onSort={this.sort} onFilter={() => this.toggleFilter()} />

        {this.filterHandler(this.state.users, this.state.filterArr).map(
          (user, index) => {
            return (
              <UserLine
                key={index}
                user={user}
                onDelete={() => {
                  this.deleteUser(user.id);
                }}
                onEdit={() => this.handleEditForm(user.id)}
              />
            );
          }
        )}
      </div>
    );
  }
}
