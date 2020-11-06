import React from 'react';
import Product from '../Product/Product';

const Dashboard = (props) => {

        const items = props.products.map( (t, idx) => (
            <Product product={t} key={idx} />
        ))
return(
    <div>
     {console.log(props)}
 {items}
        </div>
)
    
}

export default Dashboard;