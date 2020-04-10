import React, {Component} from 'react'

class Product extends Component{
    constructor(){
        super()


    }
    
    render(){
        return(
            <div>
                {this.props.products.name}
                {this.props.products.price}
                {this.props.products.imgUrl}
            </div>
        )
    }
}

export default Product