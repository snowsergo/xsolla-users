import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Users from './components/Users/Users'

class App extends Component {

  render() {
    return (
      <Layout>
        <Users></Users>
      </Layout>
    );
  }
}

export default App;
