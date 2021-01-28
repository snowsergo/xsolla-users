import React, { Component } from 'react';
import classes from './Layout.module.css';
import Button from '../../components/UI/Button/Button'
class Layout extends Component {

 
  state = {
    nemu: false,
  };

  

  render() {
    // console.log(this.props.children);
    return (
      <div className={classes.Layout}>
      <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
