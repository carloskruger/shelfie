import React from 'react';
import Product from '../Product/Product';
import axios from 'axios';

const Dashboard= (props) => {
  
        // this.deleteProduct = this.deleteProduct.bind(this)
    



    
    const {products, deleteProduct, getInventory} = props;
    // console.log("props:", props);
    // {console.log("products", products)}
    const listProducts = products.map((product) =>
    <Product key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} deleteProduct={deleteProduct} getInventory={getInventory}/>
    );
    return (
        <div>
            {listProducts}
        </div>
    )
    }
  
    
    


export default Dashboard;