import React from 'react'
import Product from '../Product/Product'


    
function Dashboard(props){
const product = props.inventory.map(products => {
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

    


export default Dashboard