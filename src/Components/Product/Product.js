import React, {Component} from 'react';

class Product extends Component {

    render(){
console.log("props: ",this.props)
        return (
            <div>
                <div className="productcard">
                <div>
                
                <img src={this.props.img} width="250px" height="150px" /> 
                </div>
                <div>
                    <p>{this.props.name}</p>
                    <p>${this.props.price}</p>
                </div>
                </div>
            </div>
        )
    }


}

export default Product;