import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Users from './Users';
import UsersHead from './UsersHead/UsersHead';
import UserLine from './UserLine/UserLine';
// import Form from '../Form/Form'
// import Button from '../UI/Button/Button'
// import Backdrop from '../UI/Backdrop/Backdrop'
// import Input from '../UI/Input/Input'

configure({ adapter: new Adapter() });

describe('<Users/>', () => {
  it('should render 1 usersHead', () => {
    const wrapper = mount(<Users />);
    expect(wrapper.find(UsersHead)).toHaveLength(1);
  });

  it('should render 7 usersLine', () => {
    const wrapper = mount(<Users />);
    expect(wrapper.find('[data-id="userline"]').length).toBe(7)
  });

  it('should open/close add form', () => {
    const wrapper = mount(<Users />);
    wrapper.find('[data-id="add-user"]').simulate('click');
    expect(wrapper.find('[data-id="form"]').length).toBe(1);
    wrapper.find('[data-id="cancel"]').simulate('click');
    expect(wrapper.find('[data-id="form"]').length).toBe(0);
  });


it('should open filter form', () => {
    const wrapper = mount(<Users />);
    wrapper.find('[data-id="filter-icon"]').simulate('click');
    expect(wrapper.find('[data-id="filter-list"]').length).toBe(1);
  });

  



});
