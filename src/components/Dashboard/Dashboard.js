import React,{Component} from 'react'
import Product from '../Product/Product'


    
class Dashboard extends Component{
    constructor(){
        super()
    }

    render(){
        const product = this.props.inventory.map(products => {
            return (
                <Product
                products={products}
                />
            )
        })
        return(
            <div>
                {product}
            </div>
        )
    }
}

    


export default Dashboard