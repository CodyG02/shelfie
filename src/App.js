import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'

import Header from './components/Header/Header'
import Form from './components/Form/Form'

class App extends Component{
  constructor(){
    super()


  }

  render(){
    return(
      <div>
        <Dashboard/>
        
        <Form/>
        <Header/>
      </div>
    )
  }
}


export default App;
