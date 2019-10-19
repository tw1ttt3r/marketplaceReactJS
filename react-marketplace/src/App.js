import React, { Component } from 'react';
import Button from './Button';
import List from './List';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render(){
    return(
      <>
        <h1 className='text-danger'>Hola Koders</h1>
        <List />
        <Button />
      </>
    )
  }
}

export default App;
