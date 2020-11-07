import React from 'react';
import Product from '../Product/Product';

const Dashboard = (props) => {
    
    const {products} = props;
    console.log("props:", props);
    {console.log("products", products)}
    const listProducts = products.map((product) =>
    <Product key={product.id} name={product.name} price={product.price} img={product.img} />
    
    );
    return (
        <div>
            {listProducts}
        </div>
    )

  
    
    

}
export default Dashboard;