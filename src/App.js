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
    this.newProduct =this.newProduct.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  newProduct(){
        axios.post('/api/product', ).then(res => {
            this.setState({
                inventory: res.data,
                
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
        newProductFn={this.newProduct}
        newInventory={this.componentDidMount}/>
        
        <Header/>
      </div>
    )
  }
}


export default App;
