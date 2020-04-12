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
    this.deleteProduct =this.deleteProduct.bind(this)

  
  }

  componentDidMount(){
    axios.get('http://localhost:4001/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  newProduct(product){
        axios.post('http://localhost:4001/api/product', product ).then(res => {
            this.setState({
                inventory: res.data,
                
            })
        })
    }

    deleteProduct(id){
      axios.delete(`http://localhost:4001/api/product/:${id}`).then(res => {
          this.setState({
              inventory: res.data
          })
      })
  }

    


  render(){
    // console.log(this.state.inventory)
    return(
      <div>
        <Dashboard
        deleteProduct={this.deleteProduct}
        newInventory={this.componentDidMount}
        inventory={this.state.inventory}
        />
        
        <Form
        inventory={this.state.inventory}
        newProductFn={this.newProduct}
        newInventory={this.componentDidMount}/>
        
        <Header/>
      </div>
    )
  }
}


export default App;
