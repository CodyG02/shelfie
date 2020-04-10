import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            imgUrl: '',
            

        }
        this.handleChange =this.handleChange.bind(this)
        this.resetFunction =this.resetFunction.bind(this)
        
    }

    newProduct(){
        this.props.newProductFn(this.state.name, this.state.price, this.state.imgUrl)
        this.setState({
            name: '',
            price: null,
            imgUrl: ''
        })
    }

    handleChange(event){
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    resetFunction(){
        console.log('reset',this.state)
        this.setState({
            
            name: '',
            price: 0,
            imgUrl: '' 
        })
    }

    // initialState(){
    //     th
    // }

    
    
    render(){
        return(
            <div>
                Form.js
                <input name='imgUrl' placeholder='image' onChange={event => this.handleChange(event)}/>
                <input name='name' placeholder='name' onChange={event => this.handleChange(event)}/>
                <input name='price' placeholder='price' onChange={event => this.handleChange(event)}/>
                <button>Add to Inventory</button>
               
                    <button onClick={() =>this.resetFunction()}>Cancel</button>
                
            </div>
        )
    }
}

export default Form