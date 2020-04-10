import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import axios from 'axios'

import Header from './components/Header/Header'
import Form from './components/Form/Form'

class App extends Component{
  constructor(){
    super()

    this.state = {
      inventory:[]
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }


  render(){
    return(
      <div>
        <Dashboard
        inventory={this.state.inventory}
        />
        
        <Form
        newInventory={this.componentDidMount}/>
        <Header/>
      </div>
    )
  }
}


export default App;
