import React, { Component } from 'react';
import UserLine from './UserLine/UserLine';
import UsersHead from './UsersHead/UsersHead';
import PositionList from '../PositionList/PositionList';
import AddForm from '../AddForm/AddForm';
import EditForm from '../EditForm/EditForm';
import classes from './Users.module.css';

const users = [
  {
    name: 'Антон',
    id: '1',
    age: 20,
    gender: 'муж',
    position: 'Инженер',
  },
  {
    name: 'Антон',
    id: '10',
    age: 34,
    gender: 'муж',
    position: 'Инженер',
  },
  {
    name: 'Коля',
    id: '2',
    age: 23,
    gender: 'муж',
    position: 'Директор',
  },
  {
    name: 'Юля',
    id: '3',
    age: 25,
    gender: 'жен',
    position: 'Бухгалтер',
  },
  {
    name: 'Джон',
    id: '4',
    age: 31,
    gender: 'муж',
    position: 'Охранник',
  },
  {
    name: 'Владимир',
    id: '5',
    age: 17,
    gender: 'муж',
    position: 'Студент',
  },
  {
    name: 'Джессика',
    id: '6',
    age: 40,
    gender: 'жен',
    position: 'Вахтер',
  },
];

export default class Users extends Component {
  state = {
    users: sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users')) : users,
    filterArr: [],
    uniquePositions: [],
    isFilterOpen: false,
    addUserisOpen: false,
    editUserisOpen: false,
    // deleteUserisOpen: false,
    editUser: '',
  };

saveToStorage(arr){
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

  render() {
    return (
      <div>
        {this.state.isFilterOpen ? (
          <PositionList
            positions={this.state.uniquePositions}
            onFilter={this.getFilterArr}
          />
        ) : null}

        {this.state.addUserisOpen ? (
          <AddForm onClick={this.createUser} onClose={this.handleAddForm} />
        ) : null}

        {this.state.editUserisOpen ? (
          <EditForm
            onClose={this.handleEditForm}
            editUser={this.state.editUser}
            onSave={this.editUser}
          />
        ) : null}

        <button onClick={() => this.handleAddForm()}>добавить</button>

        <table border='1'>
          <caption>Список всех пользователей</caption>
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
        </table>
      </div>
    );
  }
}
